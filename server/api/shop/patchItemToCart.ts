import { authByRefreshToken } from '../../security/refreshTokenAuth'
import { readBody } from 'h3';

// @ts-ignore
export default defineEventHandler(async (event:any) => {
  const body = await readBody(event)
  if (body) {
    try {
      const token = await authByRefreshToken();
      // @ts-ignore
      const config = useRuntimeConfig();
      const less = { less: body.less };
      const response = await $fetch(config.public.apiUrl + 'items' + '/' + body.id, {
          method: 'PATCH',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/merge-patch+json'
          },
          body: JSON.stringify(less)
        }
      );
      // @ts-ignore
      if (response.quantity != null) {
        // @ts-ignore
        return { quantity: response.quantity }
      }
    } catch (err) {
      return console.log('error connection to webservice ' + err);
    }
  }
  return console.log('No object found');
});
