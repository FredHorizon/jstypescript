// Permite que uma variável, um parâmetro, um retorno de função ou etc, possa ter mais de um tipo de retorno

// os exemplos abaixo é somente para nível de conhecimento, visto que é uma má prática uma função resolver mais de um problema

// function addOrConcat(a: number | string, b: number | string) {
//   if (typeof a === 'number' && typeof b === 'number') return a + b;
//   if (typeof a === 'string' && typeof b === 'string') return a + b;
// }

// função refatorada cobrindo todas as possiblidades de solução, iu seja, a função retornará somente os tipos number ou string
function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(10, '20'));
