// Nunca vai retornar. Tava a aplicação num loop, ou vai lançar um erro

export function createError(): never {
  throw new Error('Erro com never!');
}

createError();
