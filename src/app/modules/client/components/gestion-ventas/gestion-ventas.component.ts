import { Component, OnInit, Input } from '@angular/core';

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

  activo = false;
  datosUsuario: string = "";

  constructor(private ventasService: VentasServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.prestamos(2);

  }

  prestamos(id: number) {

    return this.ventasService.getPrestamoId(2).subscribe((datos) => {
      this.datosPrestamos = datos;
      console.log(this.datosPrestamos)
      this.datosUsuario = datos[0].usuario;


    })
  }


  //Modal
  openDialog(): void {
    this.dialog.open(GestionarPrestamosComponent, { data: { datosUsuario: this.datosUsuario } });


  }




}
