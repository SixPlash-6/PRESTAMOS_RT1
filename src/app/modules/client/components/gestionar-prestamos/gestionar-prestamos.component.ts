import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Iventas } from '../../interface/Iventas';
import { VentasServiceService } from '../../service/ventas.service.service';
import { Iprestamos } from '../../interface/Iprestamos';



@Component({

  selector: 'app-gestionar-prestamos',
  templateUrl: './gestionar-prestamos.component.html',
  styleUrls: ['./gestionar-prestamos.component.css']
})
export class GestionarPrestamosComponent implements OnInit {

  myControl = new FormControl('');
  opcionesPrestamos: Iprestamos[] = [];


  // @ts-ignore
  filteredOptions: Observable<Iprestamos[]>;



  constructor(public dialog: MatDialog, private ventasService: VentasServiceService) { }

  ngOnInit() {
    this.prestamos();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );


  }

  private _filter(value: string): Iprestamos[] {
    const filtervalue = value.toLowerCase();

    return this.opcionesPrestamos.filter(option => option.item.toLocaleString(filtervalue));
  }


  prestamos() {
    return this.ventasService.getPrestamos(1).subscribe((datos) => {
      this.opcionesPrestamos = datos;
    })
  }


  Ok() {

    console.log(this.myControl.value)

  }


}
