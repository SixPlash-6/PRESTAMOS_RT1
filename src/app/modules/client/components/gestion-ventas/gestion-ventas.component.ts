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

  constructor(private ventasService: VentasServiceService, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(GestionarPrestamosComponent);
  }

  ngOnInit(): void {

    this.prestamos(1);
  }


  prestamos(id:number) {

    return this.ventasService.getPrestamos(1).subscribe((datos) => {
      this.datosPrestamos = datos;
      console.log(this.datosPrestamos)

    })
  }

}
