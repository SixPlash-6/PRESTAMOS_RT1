import { Component, OnInit, } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { CommonModule } from '@angular/common';
import { Icliente } from '../../interfaces/Iclientes';



@Component({

  standalone: true,
  imports: [CommonModule],
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})

export class GestionClientesComponent implements OnInit {

  clientes: Icliente[] = []

  constructor(private clienteService: ClientesService) {
  }

  ngOnInit(): void {
    this.datosCliente()
  }

  datosCliente() {
    this.clienteService.getCliente().subscribe((data) => {
      this.clientes = data
      console.log(this.clientes)
    })
  }






}