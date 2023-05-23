// @ts-ignore
import requestIp from 'request-ip'
// @ts-ignore
import CryptoJS from 'crypto-js'

// @ts-ignore
export default defineEventHandler(async (event: any) => {

  // @ts-ignore
  const config = useRuntimeConfig()
  const req = event.node.req
  const clientIp = requestIp.getClientIp(req)

  return {
    ipClient: CryptoJS.AES.encrypt(clientIp, config.private.encryptKey).toString()
  }

})
