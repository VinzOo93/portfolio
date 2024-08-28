export function calculateTaxPrice(preTaxPrice: string, taxRate: number): string {
    const price = parseFloat(preTaxPrice);
    const taxPrice = price * (1 + taxRate);
    return taxPrice.toFixed(2);
}
