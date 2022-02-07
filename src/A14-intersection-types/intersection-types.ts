// Intersecção entre dois tipos

// Ex: 01
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
// type Pessoa = TemNome | TemSobrenome | TemIdade; // union types
type Pessoa = TemNome & TemSobrenome & TemIdade; // intersection types

// Com intersection é necessário ter os três tipos. Com union, basta um dos tipos
const pessoa: Pessoa = {
  idade: 30,
  nome: 'Fulanin',
  sobrenome: 'da Silva',
};

// Ex: 02
// A intersecção entre esses dois conjuntos é o 'A'
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecção = AB & AC & AD;

const intersection: Intersecção = 'A'; // Se for qualquer outro valor diferente de 'A' vai dar erro

// Module mod
export { pessoa };
