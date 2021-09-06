function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId('abc');
//-----------------------------------------------------------------//
function imprimirID(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirID('este_es_mi_id');
imprimirID(100.234234123);
