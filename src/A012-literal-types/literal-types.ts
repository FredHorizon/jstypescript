/**
 * Literal são valores exatos
 * let foo: 'Hello';
 * foo = 'Bar'; // Error: "Bar" não pode ser atribuído ao tipo "Hello"
 */

let x = 10;
x = 0b1010; // x é uma variável let já inferida pelo TS como number, por isso aqui pode ser alterada
// x = 'Fulanin'; // Como é let e foi inferido number, não será possível atribuir um tipo string

// let a: 100 = 100; // Aqui temos um tipo literal. Uma vez atriibuído, esse valor sempre será 100. Obs, essa escrita não é a forma recomendada
let a = 100 as const; // Essa é asserção correta, mas o exemplo abaixo é o mais recomendado
// const a = 100;
a = 120;

const y = 10; // Tipo literal inferido é 10

const pessoa = {
  nome: 'Fulanin' as const, // Tipo inferido sempre será Fulanin, e não mais string, number ou qualquer outro
  sobrenome: 'da Silva',
};

// pessoa.nome = 'Beltranin'; //Type '"Beltranin"' is not assignable to type '"Fulanin"'

// Função que recebe string, mas essa string só pode ser um desses três TIPOS(não confundir com VALOR)
export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Roxo')); // valor de argumento inválido para o tipo que foi inferido como parâmetro: só pode ser vermelho, ou amarelo, ou roxo
console.log(escolhaCor('Azul')); // valor de argumento válido

export default 1;
