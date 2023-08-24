export default function formatDateToCustomFormat(date: string): string {
  const d = new Date(date)
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ]

  const day = d.getDate()
  const month = months[d.getMonth()]

  return `${day} ${month}`
}
