import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { Icliente } from '../../interfaces/Iclientes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarClientesComponent } from '../agregar-clientes/agregar-clientes.component';






@Component({

  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AgregarClientesComponent],
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})

export class GestionClientesComponent implements OnInit {

  activo = false;
  agregarCliente() {
    this.activo = true;
  }

  clientes: Icliente[] = []
  filtroClientes: Icliente[] = []
  serchValue = "";



  constructor(private clienteService: ClientesService) {

  }
  hayClientes() {
    return this.clientes.length > 0
  }

  ngOnInit(): void {
    this.datosCliente()
  }

  datosCliente() {
    this.clienteService.getCliente().subscribe((datos) => {
      this.clientes = [...datos]
      console.log(this.clientes)
      this.filtroClientes = [...datos]
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

  filtro() {
    if (!this.serchValue) {
      this.filtroClientes = this.clientes
      return
    }
    this.filtroClientes = this.clientes.filter((cliente) => {
      if (cliente.nombre.toLocaleLowerCase().match(this.serchValue) || cliente.apellido.toLocaleLowerCase().match(this.serchValue)) {
        return true
      }
      return false
    })
  }




}