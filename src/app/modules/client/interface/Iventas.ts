export interface Iventas {
    id: number,
    idcliente: number,
    idproducto: number,
    cantidad: number,
    total: number,
    fecha: Date | null,

}

export class Iventas {
    id: number = 0;
    idcliente: number = 0;
    idproducto: number = 0;
    cantidad: number = 0;
    total: number = 0;
    fecha: Date | null = null;




}