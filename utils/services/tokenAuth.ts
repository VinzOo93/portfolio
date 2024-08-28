import fs from 'fs';
import path from 'path';

export async function getTokenFromService()
{
  // @ts-ignore
  const config = useRuntimeConfig();

  const data = {
    email: config.private.idApiUser,
    password: config.private.pwdApiUser,
  }

  try {
    const response = await fetch(config.public.apiUrl + 'auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const responseData = await response.json();
    const tokenObject = {
      refreshToken: responseData['refresh_token']
    }


    fs.writeFileSync(
      path.resolve('refreshTokenService.json'),
       JSON.stringify(tokenObject,
       null,
       2));

      return responseData['token'];

      } catch (error) {
    console.log("error getting token : security =>  " + error);
    throw error;
  }

}
