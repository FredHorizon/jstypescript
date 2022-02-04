// Há duas formas de criar arrays no TS:

// 1- Array<T> -> T - generic types
function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

// 2- T[] -> Array de tipo: string, number, etc
function concatenaArgs(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor);
}

function toUperCase(...args: string[]) {
  return args.map((valor) => valor.toLocaleUpperCase());
}

const multiplicaResult = multiplicaArgs(1, 2, 3);
const concatenaResult = concatenaArgs('a', 'b', 'c');
const toUperCaseResult = toUperCase('a', 'b', 'c');

console.log(multiplicaResult);
console.log(concatenaResult);
console.log(toUperCaseResult);
