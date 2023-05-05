import { Component, OnInit } from '@angular/core';

import { VentasServiceService } from '../../service/ventas.service.service';
import { MatDialog } from '@angular/material/dialog';
import { GestionarPrestamosComponent } from '../gestionar-prestamos';
import { Iprestamos } from '../../interface/Iprestamos';




@Component({

  selector: 'app-gestion-ventas',
  templateUrl: './gestion-ventas.component.html',
  styleUrls: ['./gestion-ventas.component.css']
})
export class GestionVentasComponent implements OnInit {

  datosPrestamos: Iprestamos[] = [];

  estado1 = [{
    "estado": "En prestamo",
    "fecha": "Tue, 25 Apr 2023 23:33:31 GMT",
    "item": "Portátil Lenovo ThinkPad",
    "observacion": null, "solicitud": 1,
    "usuario": "maleala"
  }]





  constructor(private ventasService: VentasServiceService, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(GestionarPrestamosComponent);
  }

  ngOnInit(): void {

    this.prestamos();
    // this.prestamosId();
  }



  // prestamosId() {
  //   return this.ventasService.getPrestamosId().subscribe((datos) => {
  //     this.datosPrestamos = datos;
  //     console.log(this.datosPrestamos)
  //   })

  // }


  prestamos() {

    return this.ventasService.getPrestamos().subscribe((datos) => {
      this.datosPrestamos = datos;
      console.log(this.datosPrestamos)
      console.log(this.estado1)

    })
  }

}
