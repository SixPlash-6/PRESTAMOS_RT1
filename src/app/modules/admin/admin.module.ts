import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TabsAdminComponent } from './components/tabs-admin/tabs-admin.component';
import { GestionClientesComponent } from './components/gestion-clientes/gestion-clientes.component';
import { ClientesService } from './service/clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { GestionProductosComponent } from './components/gestion-productos';
import { AgregarProductosComponent } from './components/agregar-productos';
import { GestionarPrestamosComponent } from './components/gestionar-prestamos/gestionar-prestamos.component';





@NgModule({
  declarations: [
    AdminComponent




  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TabsAdminComponent,
    GestionClientesComponent,
    AgregarClientesComponent,
    GestionProductosComponent,
    AgregarProductosComponent,
    GestionarPrestamosComponent,

  ],
  providers: [
    ClientesService
  ],
})
export class AdminModule { }
