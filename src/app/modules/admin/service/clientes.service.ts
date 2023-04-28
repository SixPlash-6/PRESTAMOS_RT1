import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icliente } from '../interfaces/Iclientes';
import { Rcliente } from '../interfaces/Rcliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/";

  //Servicio trae todos los clientes
  getClientes() {
    return this.http.get<Icliente[]>(this.url + "consultar_clientes");
  }

  //servicio agrega un cliente
  agregarCliente(cliente: Icliente) {
    return this.http.post<Rcliente>(this.url + "insertar_cliente", cliente);
  }

  // servicio trae un cliente por id
  // getClienteId(id: string) {
  //   return this, this.http.get<Icliente>(this.url + "consultar_cliente_id/" + id)
  // }

  //servicio actualiza un cliente
  actualizarCliente(cliente: Icliente) {
    return this.http.put<Rcliente>(this.url + "editar_cliente_id/" + cliente.id, cliente);

  }
  //servicio borrar un cliente
  borrarCliente(cliente: Icliente) {
    return this.http.delete<Rcliente>(this.url + "eliminar_cliente/" + cliente.id);

  }

}

