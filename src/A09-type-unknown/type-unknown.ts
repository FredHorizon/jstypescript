// unknown é o mesmo que any, porém mais seguro porque força a checagem de tipos
// let x: any;

// x = 100;
// x = 'Fulanin';
// x = 800;
// x = '10';
// const y = 800;

// console.log(x + y); // any deixa passar tudo

let x: unknown;

x = 100;
x = 'Fulanin';
x = 800;
x = '10';
const y = 800;

// console.log(x + y); // unknown identifica um erro e sugere checar
if (typeof x === 'number') console.log(x + y);
