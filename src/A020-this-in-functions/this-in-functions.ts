// Tipar this dentro de uma função
// A solução encontrada é usar o primeiro parâmetro da função, não como argumento, mas apenas como tipagem
export function funcaoQualquer(
  this: Date,
  parametro1: string,
  parametro2: number,
): void {
  console.log(this, parametro1, parametro2);
}

// Forma de chamar uma função tipada com this (que não é argumento)
funcaoQualquer.call(new Date(), 'teste', 1); // chama normalmente
funcaoQualquer.apply(new Date(), ['teste', 1]); // transforma todos os argumento em array
