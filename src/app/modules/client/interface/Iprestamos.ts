export interface Iprestamos {
    solicitudId: number,
    usuario: number,
    item: number,
    fecha: Date | null,
    estado: number,
    observacion: string,

}

export class Iprestamos {
    solicitud: number = 0;
    usuario: number = 0;
    item: number = 0;
    fecha: Date | null = null;
    estado: number = 0;
    observacion: string = "";




}