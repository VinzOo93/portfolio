// @ts-ignore
import CryptoJS from 'crypto-js';

export function serverDecrypt(string: string): string {
      // @ts-ignore
  const config = useRuntimeConfig();
  const bytes = CryptoJS.AES.decrypt(string, config.private.encryptKey);

  return  bytes.toString(CryptoJS.enc.Utf8);
}