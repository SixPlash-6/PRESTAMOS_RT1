export interface Icliente {
    id: number,
    nombre: string,
    apellido: string,
    documento: string,
    correo: string,
    telefono: string,
    direccion?: string

}

export class Icliente {
    id: number = 0;
    nombre: string = "";
    apellido: string = "";
    documento: string = "";
    correo: string = "";
    telefono: string = "";
    direccion?: string

    constructor() {

    }
}
