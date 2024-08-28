// @ts-ignore
import { listOfFiles, UploadcareSimpleAuthSchema } from '@uploadcare/rest-client';
// @ts-ignore
export default defineEventHandler(async () => {
  // @ts-ignore
  const config = useRuntimeConfig();

  const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    publicKey: config.public.cdnPublicKey, secretKey: config.private.cdnSecretKey
  });
  return await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema })
});
