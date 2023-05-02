import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { GestionVentasComponent } from './components/gestion-ventas/gestion-ventas.component';
import { GestionarPrestamosComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [
    ClientComponent,
    GestionarPrestamosComponent,
    GestionVentasComponent


  ],
  imports: [
    CommonModule,
    MatDialogModule,

  ],




})
export class ClientModule { }
