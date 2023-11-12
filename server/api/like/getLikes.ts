import { realtimeDatabase } from '../../utils/firebase';
import { readBody } from 'h3';


// @ts-ignore
export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
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
      return {
        likes
      }
    } catch (err) {
      const presenceRef = realtimeDatabase.ref('disconnectmessage');
      await presenceRef.onDisconnect().remove((err: any) => {
        return console.log('impossible d\'établir la connexion ' + err);
      });
    }
  }
});
