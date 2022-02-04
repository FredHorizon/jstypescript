// Undefined - usado para checagem de confirmação de dado, se existe ou não
let x;
if (typeof x === 'undefined') x = 20; // condição qualquer, mas que tipa a variável x. Obs: prática não recomendada para TS
console.log(x * 2); // terá retorno somente se a condição acima estiver ativa

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

const person1 = createPerson('Fulanin', 'da Silva');
const person2 = createPerson('Beltranin');
console.log(person1);
console.log(person2);

// Null - Usado pelo programador para determinar se um dado pode ser nulo ou não
// função que pode retornar number ou null: squareOf(x: any): number | null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x; // Mais uma vez: prática não recomendada para TS
  return null;
}

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('2');

// console.log(squareOfNumber);
// console.log(squareOfString);

if (squareOfNumber === null) {
  console.log('Dado inválido');
} else {
  console.log(squareOfNumber * 100);
}
