export function showMessage(message: string): void {
  console.log(message);
}

export function calc(num1: number, num2: number): number {
  return num1 + num2;
}

export function customError(message: string): never {
  throw new Error(message);
}
