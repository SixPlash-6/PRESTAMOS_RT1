import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { Icliente } from '../../interfaces/Iclientes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarClientesComponent } from '../agregar-clientes/agregar-clientes.component';
import { Router } from '@angular/router';



@Component({

  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AgregarClientesComponent],
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})

export class GestionClientesComponent implements OnInit {

  //Para visualizar formulario de agregar cliente
  activo = false;
  agregarCliente() {
    this.activo = true;
  }

  clientes: Icliente[] = []
  filtroClientes: Icliente[] = []
  serchValue = "";
  clienteSeleccionado: Icliente | null = new Icliente();

  constructor(private clienteService: ClientesService) {

  }

  ngOnInit(): void {
    this.datosCliente()
  }

  //Se llama al servicio getCliente para traer todos lo datos y asignarlo a (clientes)
  datosCliente() {
    this.clienteService.getClientes().subscribe((datos) => {
      this.clientes = [...datos]
      console.log(this.clientes)
      this.filtroClientes = [...datos]
    })
  }


  editar(cliente: Icliente) {
    this.activo = true;
    this.clienteSeleccionado = { ...cliente };

  }

  borrar(cliente: Icliente) {
    this.clienteService.borrarCliente(cliente).subscribe((datos) => {
      let d = datos;
      console.log(d)
      alert("Registro borrado con exito!")
    })
  }


  //Comprobacione de datos en tabla
  hayClientes() {
    return this.clientes.length > 0
  }

  //Filtro tabla
  filtro() {
    if (!this.serchValue) {
      this.filtroClientes = this.clientes
      return
    }
    this.filtroClientes = this.clientes.filter((cliente) => {
      if (cliente.nombre.toLocaleLowerCase().match(this.serchValue) || cliente.apellido.toLocaleLowerCase().match(this.serchValue)
        || cliente.documento.toLocaleLowerCase().match(this.serchValue) || cliente.correo.toLocaleLowerCase().match(this.serchValue)
        || cliente.telefono.toLocaleLowerCase().match(this.serchValue)) {
        return true
      }
      return false
    })
  }

}