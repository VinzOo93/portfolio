import fs from 'fs';
import path from 'path';
import { getTokenFromService } from '~/utils/services/tokenAuth';

export async function authByRefreshToken() {


    return (!fs.existsSync('refreshTokenService.json'))
        ? await getTokenFromService()
        : await getTokenWithRefresh(fs.readFileSync(path.resolve('refreshTokenService.json'), 'utf8'));

}
async function getTokenWithRefresh(fileContent: any) {
    const tokenObject = JSON.parse(fileContent);
    // @ts-ignore
    const config = useRuntimeConfig();
    if (tokenObject.refreshToken) {
        try {
            const authUrl = config.public.apiUrl + 'token/refresh';
            const data = {
                refresh_token: tokenObject.refreshToken
            }
            const response = await fetch(authUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
          // @ts-ignore
            if (response.status === 401) {
                return await getTokenFromService()
            }
          // @ts-ignore
            const responseData = await response.json();

            return responseData['token'];

        } catch (error) {
            console.log("error with token Refresh : security =>  " + error);
            throw error; // Propagez l'erreur pour un traitement ultérieur
        }
    }
}

