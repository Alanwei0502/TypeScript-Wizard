function calc(param1: string): string;
function calc(...params: number[]): number;
function calc(params: unknown): null;
function calc(params: any): any {
  if (typeof params === 'string') return '';

  if (Array.isArray(params) && typeof params[0] === 'number') {
    return params.reduce((p, n) => p + n, 0);
  }

  return null;
}
