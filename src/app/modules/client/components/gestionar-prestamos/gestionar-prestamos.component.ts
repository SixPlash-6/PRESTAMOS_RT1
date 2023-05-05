import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
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



  constructor(public dialog: MatDialog, private productoService: ProductosService) { }

  ngOnInit() {
    this.productos();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Iproducto[] {
    const filterValue = value.toLowerCase();

    return this.opcionesPrestamos.filter(option => option.nombre.includes(filterValue));
  }


  productos() {
    this.productoService.getProductos().subscribe((datos) => {
      this.opcionesPrestamos = datos;
    })

  }

  Ok() {

    console.log(this.myControl.value)

  }

}
