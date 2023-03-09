const p = (i: any, ...any: any) => console.log(`\n\t(${i})=>`, ...any);

/**
 * Virus => [V,i,r,u,s] => string => string[]
 * [V,i,r,u,s] => Virus => string[] => string
 */

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rta0 = parseStr(['V', 'i', 'r', 'u', 's']);
rta0;
p(0, rta0);

const rta1 = parseStr('Virus');
p(1, rta1);

//fixed
const rta2 = parseStr(['V', 'i', 'r', 'u', 's']) as string;
p(0, rta2);

const rta3 = parseStr('Virus') as string[];
p(1, rta3);
