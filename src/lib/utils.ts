/** Tiny class-name joiner so we avoid pulling an extra dependency. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
