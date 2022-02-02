// Any representa uma falta de tipo. Ex:
// function showMessage(msg) {
//   return msg;
// }

// Utilizar any somente como último recurso, quando não houver opção de outra solução
function showMessage(msg: any) {
  return msg; // nesse caso, o retorno pode receber qualquer tipo de dado porque não foi determinado um tipo
}

console.log(showMessage('teste'));
console.log(showMessage(1));
console.log(showMessage([1, 2, 3]));
console.log(showMessage(true));
