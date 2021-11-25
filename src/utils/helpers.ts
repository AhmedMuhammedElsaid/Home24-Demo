const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];
const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});

export const formatPrice = (value: number): string =>
    formatter.format(value / 100);
