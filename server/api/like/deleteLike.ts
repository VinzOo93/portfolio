import { realtimeDatabase } from '../../utils/firebase'
import { readBody } from 'h3'
// @ts-ignore
import CryptoJS from 'crypto-js'

// @ts-ignore
export default defineEventHandler(async (event: any) => {
  const body = await readBody(event)
  if (body) {
    try {
      const ref = realtimeDatabase.ref('Liked/fileId')
      await ref.orderByChild('fileId').equalTo(body.fileId)
        .once('value')
        .then(function(snapshot) {
          // @ts-ignore
          const config = useRuntimeConfig()
          snapshot.forEach(function(childSnapshot) {
            let cookiIp = body.ip
            let dbIp = childSnapshot.val().ip
            let bytes = CryptoJS.AES.decrypt(cookiIp, config.public.encryptKey)
            cookiIp = bytes.toString(CryptoJS.enc.Utf8)
            bytes = CryptoJS.AES.decrypt(dbIp, config.public.encryptKey)
            dbIp = bytes.toString(CryptoJS.enc.Utf8)

            if (cookiIp === dbIp) {
              childSnapshot.ref.orderByChild('ip').equalTo(body.ip)
              childSnapshot.ref.remove()
            }
          })
        })
      return { success: 1 }
    } catch (err) {
      const presenceRef = realtimeDatabase.ref('disconnectmessage')
      await presenceRef.onDisconnect().remove((err: any) => {
        return console.log('impossible d\'établir la connexion ' + err)
      })
    }
  }
  return console.log('No object found')
})
