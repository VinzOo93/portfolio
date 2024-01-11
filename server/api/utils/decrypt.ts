import { serverDecrypt } from '../../utils/serverDecrypt';
// @ts-ignore
import { readBody } from 'h3';

// @ts-ignore
export default defineEventHandler(async (event: any) => {

  // @ts-ignore
  const string = await readBody(event);

  return { decrypted: serverDecrypt(string) }
});
