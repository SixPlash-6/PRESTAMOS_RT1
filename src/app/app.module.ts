import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClientesService } from './modules/admin/service/clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';












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
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    BrowserModule

  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
