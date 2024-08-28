import { authByRefreshToken } from '../../security/refreshTokenAuth'

// @ts-ignore
export default defineEventHandler(async () => {
    try {
      const token = await authByRefreshToken();
      const body = {image: null, printFormat: null}
      // @ts-ignore
      const config = useRuntimeConfig();
      // @ts-ignore
      const response = await $fetch(config.public.apiUrl + 'items', {
          method: 'POST',
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

  return console.log('No object found');
});
