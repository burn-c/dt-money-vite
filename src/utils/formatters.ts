export const dateFormatter = (date: Date) =>
  new Intl.DateTimeFormat('pt-BR').format(date)

export const priceFormatter = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
