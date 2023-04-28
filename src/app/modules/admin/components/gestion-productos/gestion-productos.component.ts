import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { Iproducto } from '../../interfaces/Iproductos';
import { ProductosService } from '../../service/productos.service';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarProductosComponent } from '../agregar-productos';

import { Router } from '@angular/router';





@Component({

  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AgregarProductosComponent],
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})

export class GestionProductosComponent implements OnInit {

  //Para visualizar formulario de agregar producto
  activo = false;
  agregarProducto() {
    this.activo = true;
  }

  productos: Iproducto[] = []
  filtroProductos: Iproducto[] = []
  serchValue = "";
  productoSeleccionado: Iproducto | null = new Iproducto();

  constructor(private productoService: ProductosService) {

  }

  ngOnInit(): void {
    this.datosProducto()
  }

  //Se llama al servicio getProducto para traer todos lo datos y asignarlo a (producto)
  datosProducto() {
    this.productoService.getProductos().subscribe((datos) => {
      this.productos = [...datos]
      console.log(this.productos)
      this.filtroProductos = [...datos]
    })
  }


  editar(producto: Iproducto) {
    this.activo = true;
    this.productoSeleccionado = { ...producto };

  }

  borrar(producto: Iproducto) {
    this.productoService.borrarProducto(producto).subscribe((datos) => {
      let d = datos;
      console.log(d)
      alert("Registro borrado con exito!")
    })
  }


  //Comprobacione de datos en tabla
  hayProductos() {
    return this.productos.length > 0
  }

  //Filtro tabla
  filtro() {
    if (!this.serchValue) {
      this.filtroProductos = this.productos
      return
    }
    this.filtroProductos = this.productos.filter((producto) => {
      if (producto.codigo.toLocaleLowerCase().match(this.serchValue) || producto.nombre.toLocaleLowerCase().match(this.serchValue)
        || producto.categoria.toLocaleLowerCase().match(this.serchValue) || producto.subcategoria.toLocaleLowerCase().match(this.serchValue)
        || producto.precio?.toString().match(this.serchValue)) {
        return true
      }
      return false
    })
  }

}