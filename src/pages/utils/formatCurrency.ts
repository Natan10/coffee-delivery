interface Props {
  value: number;
  currency?: string;
  locales?: string;
}

export function formatCurrency({value, currency = 'BRL', locales='pt-br'}: Props) {
  return value.toLocaleString(locales, {
    style: 'currency',
    currency: currency
  })
}