import { realtimeDatabase } from '../../services/firebase';
import { serverDecrypt } from '../../services/decrypt';
import { readBody } from 'h3';


// @ts-ignore
export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
  const client = serverDecrypt(body.client);
  
  let liked = false;
  let likes: any[] = [];
  if (body) {
    try {
      const ref = realtimeDatabase.ref('Liked/fileId');
      await ref.orderByChild('fileId').equalTo(body.fileId)
        .once('value').then(function(snapshot) {
          if (snapshot.val()) {
            likes = snapshot.val();
          }
        });
        Object.values(likes).forEach(value => {
            if (serverDecrypt(value.ip) === client) {
              liked = true
            }
        });
        return {
        likes, liked
      }
    } catch (err) {
      const presenceRef = realtimeDatabase.ref('disconnectmessage');
      await presenceRef.onDisconnect().remove((err: any) => {
        return console.log('impossible d\'établir la connexion ' + err);
      });
    }
  }
});
