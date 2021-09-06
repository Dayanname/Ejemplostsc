//-----Boolean----//
let esVerdadero = true;
console.log(esVerdadero);

//-----Number----//
let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

//-----String----//
let marca: string = 'toyota';
let modelo: string = 'tacoma';

let nombre: string = "Raul";
let apellido: string = "Jimenez";
let impresion: string = `Nombre: ${nombre} Apellido: ${apellido}`;

//-----Arrays----//
let listaDeNumeros: number[] = [1, 2, 2];
let listadenumeros: Array<number> = [1, 2, 3];

//-----Tuples----//
let futbolista: [string, number];
futbolista = ['Raul Jimenez', 28]
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

//-----Any----//
let variablesinTipo: any = 'Hola Dayanna';
variablesinTipo = 100;

//-----Unknown----//
let valorDesconocido: unknown = 4;
valorDesconocido = true;

//-----void----//
function saludar2(): void {
    console.log("Hola mundo... Cruel");
}
saludar2();

//-----Undefined----//
let variableSinDefinir: undefined = undefined;

//-----Null----//
let variableNula: null = null;