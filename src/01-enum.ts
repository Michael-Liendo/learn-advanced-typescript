enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const michaelUser: User = {
  username: 'michaelliendo',
  role: ROLES.CUSTOMER,
};

// diferencia

type Estaciones = 'Primavera' | 'Verano' | 'Otoño' | 'Invierno';

const favEstacion = (est: Estaciones): string => {
  return `Mi estación fav es: ${est}`;
};
console.log(favEstacion('Primavera')); // ✅ Podemos usar los argumentos como si fuera js nativo
