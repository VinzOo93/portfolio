


import { calculateTaxPrice } from '../../utils/taxCalculator';

// @ts-ignore
export default defineEventHandler(async (event: any) => {

    try {

        const data = await $fetch('http://shopgallery.local/api/print_formats?page=1');
        // @ts-ignore
        let printsFormat = data['hydra:member'];

        printsFormat = printsFormat.map((printFormat : any) => {
          const taxRate = 0.20;
          const preTaxPrice = printFormat.preTaxPrice;
          printFormat.taxPrice = calculateTaxPrice(preTaxPrice, taxRate);
          return printFormat;
          });
        return printsFormat;
      } catch (error) {
        // @ts-ignore
        return createError({
          statusCode: 500,
          statusMessage: 'Server error',
        });
      }
    });



  