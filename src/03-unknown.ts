let x: unknown = 10;
let v1: number = x; //  Error
let v2: object = x; // Error
let v3: string = x; // Error
let v4: string[] = x; // Error
let v5: {} = x; // Error
let v6: {} | null | undefined = x; // Error
// definimos el tipo
let v10: number = x as number; // Ok
