import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TabsAdminComponent } from './components/tabs-admin/tabs-admin.component';
import { GestionClientesComponent } from './components/gestion-clientes/gestion-clientes.component';
import { ClientesService } from './service/clientes.service';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AdminComponent,


  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TabsAdminComponent,
    GestionClientesComponent
  ],
  providers: [
    ClientesService
  ],
})
export class AdminModule { }
