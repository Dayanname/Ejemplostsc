function imprimirId(id: number |  string){
    console.log(`El id es ${id}`);
}

imprimirId(1);
imprimirId('abc');
//-----------------------------------------------------------------//
function imprimirID(id: number | string){
    if (typeof id === "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirID('este_es_mi_id');
imprimirID(100.234234123);