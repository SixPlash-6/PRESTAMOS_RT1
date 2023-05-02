import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iventas } from '../interface/Iventas';



@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/";

  getVentas() {
    return this.http.get<Iventas[]>(this.url + "consultar_ventas")
  }
}
