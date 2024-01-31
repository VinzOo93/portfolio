import { realtimeDatabase } from '../../services/firebase';
import { serverDecrypt } from '../../services/serverDecrypt';
import { readBody } from 'h3';

// @ts-ignore
export default defineEventHandler(async (event: any) => {
  const body = await readBody(event)
  if (body) {
    try {
      const ref = realtimeDatabase.ref('Liked/fileId');
      await ref.orderByChild('fileId').equalTo(body.fileId)
        .once('value')
        .then(function(snapshot) {
          // @ts-ignore
          const config = useRuntimeConfig();
          snapshot.forEach(function(childSnapshot) {
            let cookiIp = serverDecrypt(body.ip);
            let dbIp = serverDecrypt(childSnapshot.val().ip);

            if (cookiIp === dbIp) {
              childSnapshot.ref.orderByChild('ip').equalTo(childSnapshot.val().ip);
              childSnapshot.ref.remove();
            }
          });
        });
      return { success: 1 }
    } catch (err) {
      const presenceRef = realtimeDatabase.ref('disconnectmessage');
      await presenceRef.onDisconnect().remove((err: any) => {
        return console.log('impossible d\'établir la connexion ' + err);
      });
    }
  }
  return console.log('No object found');
});
