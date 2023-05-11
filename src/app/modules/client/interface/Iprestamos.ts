export interface Iprestamos {
    solicitud: number,
    usuario: string,
    item: string,
    fecha: Date | null,
    estado: string,
    observacion: string,

}

export class Iprestamos {
    solicitud: number = 0;
    usuario: string = "";
    item: string = "";
    fecha: Date | null = null;
    estado: string = "";
    observacion: string = "";




}