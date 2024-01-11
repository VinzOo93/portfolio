// @ts-ignore
import { defineEventHandler, parseCookies } from 'h3'
import { serverDecrypt } from '../../utils/serverDecrypt';
// @ts-ignore
export default defineEventHandler(async (event: any) => {

  // @ts-ignore
  const cookies = parseCookies(event);
  
  return  {
    cookie: serverDecrypt(cookies.clientInfo)
  }
})
