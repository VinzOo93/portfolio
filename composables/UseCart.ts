import { useCookie } from 'nuxt/app';

export const useCart = () => {
  const createCart = async () => {
    const route = 'createCart';

    try {
      const response = await $fetch('/api/shop/' + route, {
        method: 'POST'
      });
      // @ts-ignore
      return response.cartToken;

    } catch (error) {
      console.error('❌ Erreur lors de la création du panier :', error);
    }
  };

  const registerCookieCart = (cartToken: string) => {
    const year = 31556962;
    const cookie = useCookie('clientCart', {
      maxAge: year
    })
    cookie.value = cartToken;
  }

  return { createCart, registerCookieCart };
};
