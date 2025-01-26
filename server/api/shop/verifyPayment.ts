import { readBody } from 'h3'
import { authByRefreshToken } from '~/server/security/refreshTokenAuth'
// @ts-ignore
export default defineEventHandler(async (event:any) => {
  const body = await readBody(event)

  if (body) {
    const token = await authByRefreshToken();
    // @ts-ignore
    const config = useRuntimeConfig();

    return  await $fetch(config.public.apiUrl + 'payment/capture', {
        method: 'PATCH',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/merge-patch+json'
        },
        body: JSON.stringify(body)
      }
    );
  }

});
