// @ts-ignore
import CryptoJS from 'crypto-js';
import { readBody } from 'h3';

// @ts-ignore
export default defineEventHandler(async (event: any) => {

  // @ts-ignore
  const config = useRuntimeConfig();
  const string = await readBody(event);
  const bytes = CryptoJS.AES.decrypt(string, config.private.encryptKey);
  const crypted = bytes.toString(CryptoJS.enc.Utf8);

  return { decrypted: crypted }
});
