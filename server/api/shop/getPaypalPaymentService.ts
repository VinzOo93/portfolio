import { authByRefreshToken } from '../../security/refreshTokenAuth'
import { readBody } from 'h3'

// @ts-ignore
export default defineEventHandler(async (event:any) => {
  const body = await readBody(event)
  console.log(body);
  if (body) {
    const token = await authByRefreshToken();
    // @ts-ignore
    const config = useRuntimeConfig();

    const response = await $fetch(config.public.apiUrl + 'payment/checkout', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(body)
      }
    );
    if (response != null) {
      return { payment: response }
    }
  }
});
