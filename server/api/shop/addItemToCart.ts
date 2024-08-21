import { authByRefreshToken } from '../../security/refreshTokenAuth'
import { readBody } from 'h3';

// @ts-ignore
export default defineEventHandler(async (event:any) => {
  const body = await readBody(event)
  if (body) {
    try {
      const token = await authByRefreshToken();
      // @ts-ignore
      const response = await $fetch('http://shopgallery.local/items', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + token
          },
          body: JSON.stringify(body)
        }
      );
      console.log(response);

      // @ts-ignore
      if (response.token != null) {
        // @ts-ignore
        return { cartToken: response.token }
      }

      // @ts-ignore
      if (response.cart != null) {
        // @ts-ignore
        return { cartToken: response.cart, id: response.id }
      }
    } catch (err) {
      return console.log('error connection to webservice ' + err);
    }
  }
  return console.log('No object found');
});
