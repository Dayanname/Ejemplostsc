declare function crear(o: object): void;

crear({ prop: 0 })
crear(null);
crear(undefined);
crear([]);
//--False es un tipo primitivo, por lo cual se genera error--//
//crear(false);
