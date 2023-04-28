import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Iproducto } from '../../interfaces/Iproductos';
import { ProductosService } from '../../service/productos.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit, OnChanges {

  modeloIproducto = new Iproducto();

  //Decorador para agregar funcionalidad de eventos de componente padre (datos producto)
  @Input("refrescarTablaProductos") refrescarTablaProductos: () => void = () => { }
  @Input("productoSeleccionado") productoSeleccionado: Iproducto | null = new Iproducto();

  constructor(private productoService: ProductosService, private router: Router) {

  }



  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.actualizarFormulario(changes["productoSeleccionado"].currentValue)
  }

  actualizarFormulario(producto: Iproducto) {
    this.modeloIproducto = producto;
  }

  insertarProducto(producto: Iproducto) {
    this.productoService.agregarProducto(producto).subscribe(() => {
      alert("Datos se agregaron con exito!");
      //llamada al decorador
      this.refrescarTablaProductos();
      this.modeloIproducto = new Iproducto();

    })
  }


  editarProducto(producto: Iproducto) {
    this.productoService.actualizarProducto(producto).subscribe(() => {
      alert("Datos se actualizaron con exito!");
      //llamada al decorador
      this.refrescarTablaProductos();
      this.modeloIproducto = new Iproducto()
    })
    console.log(this.productoSeleccionado);
  }
}




