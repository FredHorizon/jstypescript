// Asserção de tipos é semelhante à mudança de nome de arquivos importados: isLogin as Login from '...'

// body vai retornar um desses dois: HTMLBodyElement | null;

// Ex 01 com (if) para não retornar nullo: Recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Ex 02 com Non-null assertion(!) para não retornar nullo: Não recomendado
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Ex 03 Type assertion para não retornar nullo: Recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// Ex 04 Type assertion para não retornar nullo: Não recomendado
const body4 = document.querySelector('body') as unknown as number;

// Ex 05 HTMLElement - Type assertion: Recomendado
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();
