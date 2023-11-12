// @ts-ignore
import CryptoJS from 'crypto-js'
import { defineEventHandler, parseCookies } from 'h3'

// @ts-ignore
export default defineEventHandler(async (event: any) => {

  // @ts-ignore
  const config = useRuntimeConfig();
  const cookies = parseCookies(event);
  const token = cookies.clientInfo;

  const bytes = CryptoJS.AES.decrypt(token, config.private.encryptKey);

  return  {
    cookie: bytes.toString(CryptoJS.enc.Utf8)
  }
})
