// Tuple - array de tamanho fixo e com tipos determinados

// Tupla de valor mutável por pop(): será permitido adicionar índices ao array
const dadosCliente1: [number, string] = [1, 'Fulanin'];
const dadosCliente2: [number, string, string] = [1, 'Cicranin', 'da Silva'];
const dadosCliente3: [number, string, string?] = [1, 'Mutanin'];

dadosCliente1[0] = 2;
dadosCliente1[1] = 'Beltranin';
dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// Tupla de valor imutável por pop(): não será permitida a adiação de novos índices
const dadosCliente4: readonly [number, string] = [1, 'Fulanin'];
// dadosCliente4.pop();

console.log(dadosCliente4);

// Readonly array
const array1: readonly string[] = ['Fulanin', 'Beltranin'];
const array2: ReadonlyArray<string> = ['Fulanin', 'Beltranin'];

console.log(array1);
console.log(array2);
