import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { Iproducto } from "../../interface/Iproductos";
import { ProductosService } from "../../service/productos.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { VentasServiceService } from "../../service/ventas.service.service";
import { Iprestamos } from "../../interface/Iprestamos";

interface Idata {
  datosUsuario: Iprestamos;
}
const date = new Date();

@Component({
  selector: "app-gestionar-prestamos",
  templateUrl: "./gestionar-prestamos.component.html",
  styleUrls: ["./gestionar-prestamos.component.css"],
})
export class GestionarPrestamosComponent implements OnInit {
  myControl = new FormControl();
  opcionesPrestamos: Iproducto[] = [];
  datosUsuario = {} as Iprestamos;

  // @ts-ignore
  filteredOptions: Observable<Iproducto[]>;

  constructor(
    private ventasService: VentasServiceService,
    private productosService: ProductosService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Idata
  ) { }

  ngOnInit() {
    //Usuario realizando solicitud de prestamo
    this.datosUsuario = this.data.datosUsuario;
    this.articulos();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );


  }

  private _filter(value: string | Iproducto): Iproducto[] {
    if (value && typeof value === "string") {
      const filtervalue = value.toLowerCase();
      return this.opcionesPrestamos.filter((option) =>
        option.descripcion.match(filtervalue)
      );
    }
    return this.opcionesPrestamos;
  }

  displayLabelFn(option: Iproducto | null) {
    return option ? option.descripcion : "";
  }

  articulos() {
    return this.productosService.getProductos().subscribe((datos) => {
      this.opcionesPrestamos = datos;
      console.log(this.opcionesPrestamos);
    });
  }

  insertar() {
    const userId = Number(localStorage.getItem("userId"))
    return this.ventasService
      .insertarSolicitud({
        userId,
        itemId: this.myControl.value.itemid,
      })
      .subscribe(() => {
        alert("Solicitud registrada con exito");
      });
  }

  Ok() {
    //articulo seleccionado para el prestamo
    console.log(this.myControl.value);
    this.insertar();
  }
}
