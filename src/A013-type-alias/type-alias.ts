// Type alias nada mais é que a criação de tipos personalizados em variáveis. Obs: sempre com a primeira letra maiúscula

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade; // uso do tipo idade criado acima, que é um number
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK; // Union types

// Aqui é preciso inferir o tipo Pessoa
// export const pessoa: Pessoa = {
//   nome: 'Fulanin',
//   idade: 32,
//   salario: 50_000, // TS entende o 50k como 50000
//   corPreferida: 'Preto',
// };

export const pessoa: Pessoa = {
  nome: 'Fulanin',
  idade: 32,
  salario: 50_000, // TS entende o 50k como 50000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
