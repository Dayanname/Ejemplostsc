//--Esta funcion no tiene punto final ya que dispara una excepcion--//
function error(mensaje: string): never {
    throw new Error(mensaje);
}

//--Esta funcion no tiene punto final ya que dispara un error--//
function fallo(): never {
    return error("Reportar fallo");
}

//--Esta funcion no finaliza ya que posee un loop infinito--//
function loopInfinito(): never {
    while (true){}
}