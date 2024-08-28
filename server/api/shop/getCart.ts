import { authByRefreshToken } from '../../security/refreshTokenAuth'
import { readBody } from 'h3'

// @ts-ignore
export default defineEventHandler(async (event:any) => {
  const body = await readBody(event)

  if (body) {
    const token = await authByRefreshToken();
    // @ts-ignore
    const config = useRuntimeConfig();

    return await $fetch(config.public.apiUrl + 'carts/' + body.cartToken, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
    })
  }
});
