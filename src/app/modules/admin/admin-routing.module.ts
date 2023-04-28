import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestionClientesComponent, TabsAdminComponent } from './components';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './components/agregar-productos';
import { GestionProductosComponent } from './components/gestion-productos';



const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "gestion-clientes", component: GestionClientesComponent },
  { path: "tabs-admin", component: TabsAdminComponent },
  { path: "agregar-cliente", component: AgregarClientesComponent }
  { path: "agregar-producto", component: AgregarProductosComponent },
  { path: "gestion-productos", component: GestionProductosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {


}
