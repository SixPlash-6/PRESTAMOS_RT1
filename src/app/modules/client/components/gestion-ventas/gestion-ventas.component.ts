import { Component, OnInit } from '@angular/core';
import { Iventas } from '../../interface/Iventas';
import { VentasServiceService } from '../../service/ventas.service.service';
import { MatDialog } from '@angular/material/dialog';
import { GestionarPrestamosComponent } from '../gestionar-prestamos';






@Component({

  selector: 'app-gestion-ventas',
  templateUrl: './gestion-ventas.component.html',
  styleUrls: ['./gestion-ventas.component.css']
})
export class GestionVentasComponent implements OnInit {

  datosVentas: Iventas[] = []

  constructor(private ventasService: VentasServiceService, public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(GestionarPrestamosComponent);
  }

  ngOnInit(): void {
    this.ventas();
  }

  ventas() {
    return this.ventasService.getVentas().subscribe((datos) => {
      this.datosVentas = datos;
      console.log(this.datosVentas)
    })
  }



}
