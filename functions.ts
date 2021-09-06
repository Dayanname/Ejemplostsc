function saludar3(nombre: string){
    console.log(`Hola ${nombre}`)
}

saludar3('Dayanna');

//--------Retorno de valor------//
function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

//--------Funciones anonimas------//
const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});

//--------Tipo aliases------//
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada y es : ${punto.y}`);
}

imprimirCoordenada({x: 10, y: 25});

//--------Funciones literales------//
function imprimir(estadoCivil: 'soltero' | 'casado'){
    console.log(estadoCivil);
}

imprimir('soltero');

//--------Funciones como expresiones------//
function saludar4(fn: (a:string) => void) {
    fn("Hola Mundo");
}

function imprimirEnConsola(s: string) {
    console.log(s)
}

saludar4(imprimirEnConsola);
