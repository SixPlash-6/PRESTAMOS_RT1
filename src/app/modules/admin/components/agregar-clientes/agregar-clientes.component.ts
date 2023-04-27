import { Component, Input, OnInit, } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { Icliente } from '../../interfaces/Iclientes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarClientesComponent implements OnInit {

  modeloIcliente = new Icliente();
  @Input("refrescarTablaClientes") refrescarTablaClientes: () => void = () => { }

  constructor(private clienteService: ClientesService) {

  }

  ngOnInit(): void {
  }

  insertarCliente(cliente: Icliente) {
    this.clienteService.agregarCliente(cliente).subscribe((data) => {
      alert("Datos se agregaron con exito!");
      this.refrescarTablaClientes();
    })
  }

  // actualizarDatosCliente(clientes: Icliente) {
  //   this.clienteService.actualizarCliente().subscribe((datos) => {
  //     console.log(datos)
  //   })
  // }

  // borrarDatosCliente(ParametoCliente: Icliente): void {
  //   this.clienteService.borrarCliente(ParametoCliente.id).subscribe((datos) => {
  //     console.log(datos)
  //   })

  // }



}
