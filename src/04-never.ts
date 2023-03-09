/*
El tipo de dato never, más que todo sirve para tipar a una función que nunca va a finalizar
o sencillamente que pueda terminar el programa en el caso de lanar una excepción.

Un ejemplo de ello es cuando queremos manejar un error o cuando ejecutamos un loop infinito,
como por ejemplo una validación de un token de cada x’s segundos, que es una función que se ejecuta
constantemente, ya que lanzas la función, esta envía el token lo valida, y comienza el timer para hacer el
refresh de ese token, si hay un error lanza una excepción y si no continúa con la validación y el timer…
 */

const withoutEnd = () => {
  while (true) {
    console.log('nunca para de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
};

console.log(example('Hola'));
console.log(example([1, 1, 1, 1]));
console.log(example(1212)); // detiene
console.log(example('Hola después del fail'));
console.log(example('Hola después del fail'));
console.log(example('Hola después del fail'));
