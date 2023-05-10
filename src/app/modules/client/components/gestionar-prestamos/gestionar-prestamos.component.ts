import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Iproducto } from '../../interface/Iproductos';
import { ProductosService } from '../../service/productos.service';





@Component({

  selector: 'app-gestionar-prestamos',
  templateUrl: './gestionar-prestamos.component.html',
  styleUrls: ['./gestionar-prestamos.component.css']
})
export class GestionarPrestamosComponent implements OnInit {

  myControl = new FormControl('');
  opcionesPrestamos: Iproducto[] = [];


  // @ts-ignore
  filteredOptions: Observable<Iproducto[]>;



  constructor(private productosService: ProductosService, public dialog: MatDialog) { }

  ngOnInit() {

    this.articulos();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }
  private _filter(value: string): Iproducto[] {
    const filtervalue = value.toLowerCase();

    return this.opcionesPrestamos.filter(option => option.descripcion);
  }

  articulos() {
    return this.productosService.getProductos().subscribe((datos) => {
      this.opcionesPrestamos = datos;
      console.log(this.opcionesPrestamos)
    })
  }

  Ok() {

    console.log(this.myControl.value)

  }









}
