export interface Iproducto {
    id: number,
    codigo: string,
    nombre: string,
    categoria: string,
    subcategoria: string,
    precio: number | null,
    direccion?: string
}

export class Iproducto {
    id: number = 0;
    codigo: string = "";
    nombre: string = "";
    categoria: string = "";
    subcategoria: string = "";
    precio: number | null = null;
    direccion?: string

    constructor() {

    }
}