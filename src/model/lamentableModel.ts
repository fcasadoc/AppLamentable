export class lamentableModel {
    private _idLamentable: string;
    private _nombre: string;
    private _apellido1: string;
    private _apellido2: string;


    constructor(idLamentable, nombre, appellido1, apellido2){
        this._idLamentable = idLamentable || "";
        this._nombre = nombre || "";
        this._apellido1 = apellido2 || "";
        this._apellido2 = apellido2 || "";
    }

    set idLamentable(value: string) {
        this._idLamentable = value;
    }
    
    set nombre(value: string) {
        this._nombre = value;
      }
    
    set apellido1(value: string) {
        this._apellido1 = value;
    }
    
    set apellido2(value: string) {
        this._apellido2 = value;
    }

    get idLamentable(): string {
        return this._idLamentable;
    }
    
    get nombre(): string {
        return this._nombre;
    }
    
    get apellido1  (): string {
        return this._apellido1;
    }
    
    get apellido2(): string {
        return this._apellido2;
    }
    
}
