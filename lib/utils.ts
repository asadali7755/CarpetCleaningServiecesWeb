// Lightweight className joiner (this project doesn't use Tailwind, so we don't
// need clsx + tailwind-merge — just filter falsy values and join).
export function cn(...inputs: (string | false | null | undefined)[]): string {
  return inputs.filter(Boolean).join(" ");
}
