// Void - função ou método não retorna nada
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

//  Esse obejto já foi declarado em outro documento, para que ele possa ser redeclarado aqui é preciso exportar
const pessoa = {
  nome: 'Fulanin',
  sobrenome: 'da Silva',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Fulanin', 'Beltranin');
pessoa.exibirNome();

export { pessoa };
