// Exemplo 1 de  função como tipo:
// Feito sem convenção ou padrão algum, uma verdadeira gambiarra
// function mapStrings(array: string[], callbackfn: CallableFunction): string[] {
//   const newArray: string[] = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callbackfn(array[i]));
//   }

//   return newArray;
// }

// const abc = ['a', 'b', 'c'];
// const abcMapped = mapStrings(abc, function (item) {
//   return item.toUpperCase();
// });

// console.log(abc);
// console.log(abcMapped);

// Exemplo 2 de  função como tipo:
// Agora realmente tipada
type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
