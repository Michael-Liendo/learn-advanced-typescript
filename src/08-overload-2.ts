type customType = string | string[];

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}
const rta = parseStr('viustu');
