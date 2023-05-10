import { Component, OnInit } from '@angular/core';

import { VentasServiceService } from '../../service/ventas.service.service';
import { MatDialog } from '@angular/material/dialog';
import { Iprestamos } from '../../interface/Iprestamos';
import { GestionarPrestamosComponent } from '../gestionar-prestamos';





@Component({

  selector: 'app-gestion-ventas',
  templateUrl: './gestion-ventas.component.html',
  styleUrls: ['./gestion-ventas.component.css']
})
export class GestionVentasComponent implements OnInit {


  datosPrestamos: Iprestamos[] = [];



  constructor(private ventasService: VentasServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.prestamos(1);

  }

  prestamos(id: number) {

    return this.ventasService.getPrestamoId(1).subscribe((datos) => {
      this.datosPrestamos = datos;
      console.log(this.datosPrestamos)

    })
  }


  //Modal
  openDialog(): void {
    this.dialog.open(GestionarPrestamosComponent);
  }




}
