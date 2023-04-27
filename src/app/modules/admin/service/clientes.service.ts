import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icliente } from '../interfaces/Iclientes';
import { Rcliente } from '../interfaces/Rcliente';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/";

  getCliente() {
    return this.http.get<Icliente[]>(this.url + "consultar_clientes");
  }

  agregarCliente(cliente: Icliente) {
    return this.http.post<Rcliente>(this.url + "insertar_cliente", cliente);
  }

  // actualizarCliente(data: any, id: string): Observable<any> {
  //   return this.http.patch("http://localhost:5000/actualizar_cliente/<id>", data)
  // }
  // borrarCliente(id: string, cliente: Icliente) {
  //   return this.http.delete<Icliente[]>(this.url + "eliminar_cliente");

  // }

}

