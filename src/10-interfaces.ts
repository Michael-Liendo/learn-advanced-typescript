export {};
/*Interfaces en TS
Las interfaces funcionan muy similar a como lo hace type, pero en las interfaces solo aplica para los objetos
*/
type Size = 'S' | 'M' | 'L';
type User = {
  id: string;
  name: string;
};
interface UserInterface {
  id: string;
  name: string;
}
/*
¿Entonces, porque usar interfaces si puedo usar type?
La razón es sencilla, con las interfaces podemos heredar otras interfaces, y con los type no podemos hacer eso.
*/
interface HumanInterface {
  name: string;
  lastName: string;
}
interface HeroInterface extends HumanInterface {
  superPower: string;
}
