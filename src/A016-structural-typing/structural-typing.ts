// Tipagem estruturada - a identidade do tipo não é muito relevante, somente as instruções que estão nele
type VerifyUserfn = (user: User, setnValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserfn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// bdUser e sentUser são tipos que não foram definidos,
// mas é irrelevante porque as instruções neles cumprem as duas regras da tipagem:
// username e password como string
const bdUser = {
  username: 'Fulanin',
  password: '12345',
};

const sentUser = {
  username: 'Fulanin',
  password: '12345',
  permissions: '', // A adição de mais um par de chave/valor é permitido pq a tipagem acima só precisa de duas regras e não impôs outras restrições
};

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
