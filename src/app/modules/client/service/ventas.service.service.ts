import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iventas } from '../interface/Iventas';
import { Iprestamos } from '../interface/Iprestamos';



@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:5000";


  getPrestamos() {
    return this.http.get<Iprestamos[]>(this.url + "/solicitudes")
  }

  // getPrestamosId() {
  //   return this.http.get<Iprestamos[]>(this.url + "/consultar/solicitud")
  // }
}
