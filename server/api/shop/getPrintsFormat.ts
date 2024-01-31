
import { calculateTaxPrice } from '../../services/taxCalculator';
import { authByRefreshToken } from '../../security/refreshTokenAuth';

// @ts-ignore
export default defineEventHandler(async () => {

  try {
    const token = await authByRefreshToken();

    const data = await $fetch('http://shopgallery.local/print_formats?page=1', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    }
    );
    // @ts-ignore

    const printsFormat = data.map((printFormat: any) => {
      const taxRate = 0.20;
      const preTaxPrice = printFormat.preTaxPrice;
      printFormat.taxPrice = calculateTaxPrice(preTaxPrice, taxRate);
      return printFormat;
    });
    return printsFormat;

  } catch (error) {
    console.log(error);
    // @ts-ignore
    return createError({
      statusCode: 500,
      statusMessage: 'Server error',
    });
  }
});



