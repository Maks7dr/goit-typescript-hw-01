export const age: number = 50;
export const username: string = "Max";
export const toggle: boolean = true;
export const empty: null = null;
export const callback: (a: number) => number = (a) => {
  return 100 + a;
};

console.log({ age, username, toggle, empty, callback });
