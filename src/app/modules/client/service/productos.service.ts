import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproducto } from '../interface/Iproductos';
import { Rproducto } from '../interface/Rproducto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/";

  //Servicio trae todos los productos
  getProductos() {
    return this.http.get<Iproducto[]>(this.url + "consultar_productos");
  }

  //servicio agrega un producto
  agregarProducto(producto: Iproducto) {
    return this.http.post<Rproducto>(this.url + "insertar_producto", producto);
  }

  // servicio trae un producto por id
  // getproductoId(producto: Iproducto) {
  //   return this, this.http.get<Iproducto>(this.url + "consultar_producto_id/" + producto.id)
  // }

  //servicio actualiza un producto
  actualizarProducto(producto: Iproducto) {
    return this.http.put<Rproducto>(this.url + "editar_producto_id/" + producto.id, producto);

  }
  //servicio borrar un producto
  borrarProducto(producto: Iproducto) {
    return this.http.delete<Rproducto>(this.url + "eliminar_producto/" + producto.id);

  }

}
