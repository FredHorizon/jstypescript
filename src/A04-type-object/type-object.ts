// === Padrão com valor inferido. Nesse caso é do tipo string ===
// Tipo recomendado
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveC = 'Nova chave' // O objeto criado no modo padrão sem especificar o tipo, não permite a criação de uma nova chave
console.log('================== ObjetoA ==================');
console.log((objetoA.chaveA = 'Outro valor'));

// === Objeto NÂO tipado com unknown ===
// Não é o tipo recomendado porque é possível inferir qualquer valor, e criar novas chaves com novos valores também
const objetoB: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 2,
};

console.log('================== ObjetoB ==================');
console.log((objetoB.chaveA = 'Outro valor'));
console.log((objetoB.chaveB = 'Valor B'));
console.log((objetoB.chaveC = 'Nova chave'));

// === Objeto tipado ===
// Recomendado para objetos que possivelmente serão estendidos. Uma API que não se sabe os valores, por exemplo.
const objetoC: {
  chaveA: string;
  readonly chaveB: number; // Não será possível alterar o valor
  chaveC?: string; // opcional
  [key: string]: unknown; // index signature: quando não se sabe qual o valor da chave
} = {
  chaveA: 'Valor A',
  chaveB: 5, // readonly
};

console.log('================== ObjetoC ==================');
console.log((objetoC.chaveA = 'Outro valor'));
console.log(objetoC.chaveB); // readonly
console.log((objetoC.chaveC = 'Nova chave C'));
console.log((objetoC.chaveD = 2));
