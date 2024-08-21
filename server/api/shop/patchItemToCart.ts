import { authByRefreshToken } from '../../security/refreshTokenAuth'
import { readBody } from 'h3';

// @ts-ignore
export default defineEventHandler(async (event:any) => {
  const body = await readBody(event)
  if (body) {
    try {
      const token = await authByRefreshToken();
      // @ts-ignore
      const response = await $fetch('http://shopgallery.local/items/', {
          method: 'PATCH',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + token
          },
          body: JSON.stringify(body)
        }
      );
      // @ts-ignore
      if (response.token != null) {
        // @ts-ignore
        return { cartToken: response.token }
      }
    } catch (err) {
      return console.log('error connection to webservice ' + err);
    }
  }
  return console.log('No object found');
});
