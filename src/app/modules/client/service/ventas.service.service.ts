import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iprestamos } from '../interface/Iprestamos';
import { Ilogin } from 'src/app/components/login/Ilogin';
import { Rsolicitud } from '../interface/Rsolicitud';
import { Isolicitud } from '../interface/Isolicitud';




@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {



  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:5000";


  getPrestamoId(id: number) {
    return this.http.get<Iprestamos[]>(this.url + "/consultar/solicitud/" + id)
  }

  getLogin(user: string, password: string) {
    return this.http.post<Ilogin>(this.url + "/Login", { usuario: user, password: password })
  }

  insertarSolicitud(solicitud: Pick<Isolicitud, "itemId" | "userId">) {
    return this.http.post<Rsolicitud>(this.url + "/insertar/solicitud", solicitud)
  }

}
