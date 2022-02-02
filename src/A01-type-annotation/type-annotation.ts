// ===== Tipos básicos =====
// Os tipos da linguagem são escritos com letra minúscula, os personalizados são com letra maiúscula

let nome: string = 'Fulanin'; // Qualquer tipo de string: "" '' ``
let idade: number = 40; // int, float, positivos, negativos, hexadecimal, binário, octal
let adulto: boolean = true; // true ou  false
let simbolo: symbol = Symbol('um-símbolo'); // symbol

// let big: bigint = 10n; // big int (usado em target ES2020)
/*
 Nos exemplo acima ocorre inferência de tipos, ou seja, redundância.
 Não há necessidade de tipar um dado em que o TS já se sabe o tipo. Por exemplo:
 Se uma variável for do tipo < let nome = 'Fulanin' > o TS já sabe que se trata de uma string
 Não é adequado inferir tipos, somente quando o TS não reconhecer qual é o tipo (n)
 */

// ===== Arrays =====
let arrayNumbersOne: Array<number> = [1, 2];
let arrayStringsOne: Array<string> = ['1', '2', 'teste'];
// ou
let arrayNumbersTwo: number[] = [1, 2];
let arrayStringsTwo: string[] = ['1', '2', 'teste'];

// Objetos
// Para o nossos próprios tipos é com letra maiúscula. Ex:
// let pessoa: Pessoa = {idade: 40, nome: 'Fulanin'}
// < adulto? > é opcional

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Fulanin',
  idade: 40,
  // adulto: true,
};

// ===== Funções =====
function soma(x: number, y: number) {
  return x + y;
}
console.log(soma(1, 9));
// ou
const soma2: (x: number, y: number) => number = (x, y) => x + y;
console.log(soma2(1, 9));
