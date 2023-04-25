import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestionClientesComponent, TabsAdminComponent } from './components';



const routes: Routes = [
  { path: "", component: AdminComponent },
  { path: "gestion-clientes", component: GestionClientesComponent },
  { path: "tabs-admin", component: TabsAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {


}
