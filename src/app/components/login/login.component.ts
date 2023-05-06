import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Icliente } from 'src/app/modules/admin/interfaces/Iclientes';
import { Iusuarios } from '../interface';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.http.post<Iusuarios>('http://127.0.0.1:5000/Login', { usuario: this.user, password: this.password })
      .subscribe(response => {
        if (this.user == response.Usuario && this.password == response.password) {
          const perfil = response.Perfil
          // Redirigir a diferentes páginas según el perfil
          if (perfil === 1) {
            this.router.navigate(['admin']);
          } else if (perfil === 2) {
            this.router.navigate(['usuario']);
          } else {
            alert('Perfil no válido');
          }
          
        }
        console.log(response)
         
      }, error => {
        alert('Inicio de Sesión Fallido');
        console.log(error);
      });
  }
}
