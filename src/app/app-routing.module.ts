import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, PerfilComponent } from './components';
import { AdminComponent } from './modules';
import { ClientComponent } from './modules/client/client.component';




const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./modules").then(m => m.HomeModule) },
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "admin", component: AdminComponent },
  { path: "client", component: ClientComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
