// @ts-ignore
import CryptoJS from 'crypto-js';

export function serverEncrypt(string: string): string {
    // @ts-ignore
  const config = useRuntimeConfig();

  return  CryptoJS.AES.encrypt(string, config.private.encryptKey).toString();
}