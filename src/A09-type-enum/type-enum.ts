// Enum é uma estrutura de dados não ordenada usada para quando se tem mais de uma opção para alguma coisa. Geralmente usado para enumerar
// É usado somente em casos específicos conhecidos pelo programador
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO = 5, // 5
  VERDE = 'VERDE', // A  partir daqui o enum não consegue inicialiar o índice do próximo index abaixo
  PRETO = 6, // Aqui é necessário inicializar
}

// Esse enum será mesclado com o enum de cima
enum Cores {
  MARROM = 7,
  CINZA = 8,
}

console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[0]);
// console.log(Cores[5]);
// console.log(Cores[2]); // o problema aqui é que não aponta nenhuma mensagem de erro. E isso pode ocasionar erros futuros difíceis de identificar
// console.log(Cores['VERDE']);

// Tipando enum
function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

console.log('========== Uso da função escolhaCor() ==========');
escolhaCor(Cores.VERMELHO);
escolhaCor(12345); // Mesmo problema que ocorre na linha 21. Por isso o uso do enum tem quer ser bem específico
