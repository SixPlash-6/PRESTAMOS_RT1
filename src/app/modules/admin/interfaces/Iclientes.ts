export interface Icliente {
    id: string | null,
    nombre: string,
    apellido: string,
    documento: string,
    correo: string,
    telefono: string,
    direccion?: string

}

export class Icliente {
    id: string | null = "";
    nombre: string = "";
    apellido: string = "";
    documento: string = "";
    correo: string = "";
    telefono: string = "";
    direccion?: string

    constructor() {

    }
}
