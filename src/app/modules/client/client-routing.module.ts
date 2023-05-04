import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { GestionVentasComponent } from './components/gestion-ventas/gestion-ventas.component';
import { GestionarPrestamosComponent } from './components';




const routes: Routes = [
  { path: "", component: ClientComponent },
  { path: "gestion-ventas", component: GestionVentasComponent },
  { path: "gestionar-prestamos", component: GestionarPrestamosComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {


}
