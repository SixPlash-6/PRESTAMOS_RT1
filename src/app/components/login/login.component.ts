import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { VentasServiceService } from 'src/app/modules/client/service/ventas.service.service';
import { Ilogin } from './Ilogin';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  perfil = {} as Ilogin;

  constructor(private http: HttpClient, private router: Router, private ventaService: VentasServiceService) { }

  ngOnInit() {

  }

  login(form: NgForm) {
    const user = form.value.user
    const password = form.value.password
    console.log(user, password)

    return this.ventaService.getLogin(user, password).subscribe(datos => {
      this.perfil = datos;
      console.log(this.perfil)
      if (this.perfil.status == "ok") {
        localStorage.setItem("token", this.perfil.token)

        if (this.perfil.Perfil === 2) {
          this.router.navigate(["client"]);
        } else if (this.perfil.Perfil == 1) {
          this.router.navigate(["admin"]);
        } else {
          alert("Perfil no valido");
        }
      }
    }, error => {
      alert("Inicio de sesion fallido");
      console.log(error);
    });

  }


}
