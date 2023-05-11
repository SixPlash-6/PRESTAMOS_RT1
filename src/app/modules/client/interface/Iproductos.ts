export interface Iproducto {
    itemid: number,
    item: string,
    descripcion: string,
    tipo: string

}

export class Iproducto {
    itemid: number = 0;
    item: string = "";
    descripcion: string = "";
    tipo: string = "";

    constructor() {

    }
}