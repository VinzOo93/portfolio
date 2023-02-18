import { realtimeDatabase } from '../utils/firebase'

// @ts-ignore
export default defineEventHandler(async () => {
  const ref = realtimeDatabase.ref('Player')
  let players
  await ref.orderByChild('successRate').startAfter(30)
    .once('value', (snapshot) => {

      players = snapshot.val()
    }, (errorObject) => {
      console.log(errorObject)
    })
  return {
    players
  }
})
