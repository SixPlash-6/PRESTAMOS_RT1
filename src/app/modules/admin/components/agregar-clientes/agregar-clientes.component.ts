import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { Icliente } from '../../interfaces/Iclientes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarClientesComponent implements OnInit, OnChanges {

  modeloIcliente = new Icliente();

  //Decorador para agregar funcionalidad de eventos de componente padre (datos cliente)
  @Input("refrescarTablaClientes") refrescarTablaClientes: () => void = () => { }
  @Input("clienteSeleccionado") clienteSeleccionado: Icliente | null = new Icliente();

  constructor(private clienteService: ClientesService, private router: Router) {

  }



  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.actualizarFormulario(changes["clienteSeleccionado"].currentValue)
  }

  actualizarFormulario(cliente: Icliente) {
    this.modeloIcliente = cliente;
  }

  insertarCliente(cliente: Icliente) {
    this.clienteService.agregarCliente(cliente).subscribe(() => {
      alert("Datos se agregaron con exito!");
      //llamada al decorador
      this.refrescarTablaClientes();
      this.modeloIcliente.nombre = "";
      this.modeloIcliente.apellido = "";
      this.modeloIcliente.documento = "";
      this.modeloIcliente.correo = "";
      this.modeloIcliente.telefono = "";
    })
  }


  editarCliente(cliente: Icliente) {
    this.clienteService.actualizarCliente(cliente).subscribe(() => {
      alert("Datos se actualizar con exito!");
      //llamada al decorador
      this.refrescarTablaClientes();
      this.modeloIcliente = new Icliente()

    })
    console.log(this.clienteSeleccionado);
  }
}

  // actualizarDatosCliente(modeloIcliente: Icliente) {
  //   this.clienteService.actualizarCliente(modeloIcliente).subscribe((datos) => {
  //     this.modeloIcliente = datos;
  //     alert("Se actualizo con exito!");
  //     console.log(datos);
  //     this.modeloIcliente.nombre = "";
  //     this.modeloIcliente.apellido = "";
  //     this.modeloIcliente.documento = "";
  //     this.modeloIcliente.correo = "";
  //     this.modeloIcliente.telefono = "";
  //   })

  // }


  // borrarDatosCliente(ParametoCliente: Icliente): void {
  //   this.clienteService.borrarCliente(ParametoCliente.id).subscribe((datos) => {
  //     console.log(datos)
  //   })

  // }



