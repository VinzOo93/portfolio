import { realtimeDatabase } from '~/utils/services/firebase'

// @ts-ignore
export default defineEventHandler(async () => {
  const ref = realtimeDatabase.ref('Player')
  let players: any[] = []
  let arrayKeys: any[] = []

  await ref.orderByChild('timeLeft')
    .once('value', (snapshot) => {
      let datas = snapshot.val()
      arrayKeys = Object.keys(datas).sort((a: any, b: any): any => {
        if (datas[b].timeLeft < datas[a].timeLeft) {
          return 1
        }
        return -1
      })
      arrayKeys.forEach((key) => {
        players.push(datas[key])
      })
    }, (errorObject) => {
      console.log(errorObject)
    })
  return {
    players
  }
})
