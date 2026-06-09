/** Formats a nightly rate in Israeli shekels, e.g. 1590 -> "₪1,590". */
export function formatPrice(amount: number): string {
  return `₪${amount.toLocaleString("he-IL")}`;
}
