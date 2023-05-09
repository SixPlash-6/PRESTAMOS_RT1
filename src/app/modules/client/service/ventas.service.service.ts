import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iprestamos } from '../interface/Iprestamos';
import { Ilogin } from 'src/app/components/login/Ilogin';



@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {



  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:5000";


  getPrestamos(id: number) {
    return this.http.get<Iprestamos[]>(this.url + "/consultar/solicitud/" + id)
  }

  // getPrestamosId() {
  //   return this.http.get<Iprestamos[]>(this.url + "/consultar/solicitud")
  // }
  getLogin(user: string, password: string) {
    return this.http.post<Ilogin>(this.url + "/Login", { usuario: user, password: password })
  }
}
