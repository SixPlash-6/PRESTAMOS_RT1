import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClientesService } from './modules/admin/service/clientes.service';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    LoginComponent,
    PerfilComponent,


  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
