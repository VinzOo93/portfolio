
export async function getTokenFromService() {
  const authUrl = 'http://shopgallery.local/auth';

  const data = {
    email: 'dev@apiShopGallery.com',
    password: 'devShop',
  }

  try {
    const response = await fetch(authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const responseData = await response.json();
    
    return responseData['token'];
  } catch (error) {
    console.log("error getting token : security =>  " + error);
    throw error; // Propagez l'erreur pour un traitement ultérieur
  }

}