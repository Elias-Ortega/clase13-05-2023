import { Persona } from "./persona.js";

class Ayudante extends Persona{
    _sueldo;

    constructor(rut, nombre, apellido, codigoCurso, sueldo){
        super(rut, nombre, apellido, codigoCurso);//siempre va antes el super
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }
    
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
}

const ayudante = new Ayudante('11111111-1', 'Marcos', 'Ojeda', '123456', 600000);
console.log(ayudante);