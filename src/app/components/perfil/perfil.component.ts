import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  textoCliente = "Use este perfil para solicitar sus servicios"
  textoAdministrador = "Use este perfil para gestionar servicios"

  constructor(private router: Router) {

  }

  admin() {
    this.router.navigate(["admin"])

  }

  client() {
    this.router.navigate(["client"])
  }
  ngOnInit(): void {

  }



}
