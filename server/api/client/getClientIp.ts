// @ts-ignore
import requestIp from 'request-ip';
import { serverEncrypt } from '../../services/serverEncrypt';

// @ts-ignore
export default defineEventHandler(async (event: any) => {

  return {
    ipClient: serverEncrypt(requestIp.getClientIp(event.node.req))
  }

});
