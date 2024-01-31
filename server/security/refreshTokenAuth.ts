import fs from 'fs';
import path from 'path';
import { getTokenFromService } from '../security/tokenAuth';

export async function authByRefreshToken() {


    return (!fs.existsSync('refreshTokenService.json'))
        ? await getTokenFromService()
        : await getTokenWithRefresh(fs.readFileSync(path.resolve('refreshTokenService.json'), 'utf8'));

}
async function getTokenWithRefresh(fileContent: any) {
    const tokenObject = JSON.parse(fileContent);

    if (tokenObject.refreshToken) {
        try {
            const authUrl = 'http://shopgallery.local/token/refresh';
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

            if (response.status === 401) {
                return await getTokenFromService()
            }

            const responseData = await response.json();

            return responseData['token'];

        } catch (error) {
            console.log("error with token Refresh : security =>  " + error);
            throw error; // Propagez l'erreur pour un traitement ultérieur
        }
    }
}

