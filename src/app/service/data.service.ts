import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Puesto, Empleado } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url: string;

  constructor(private _http: HttpClient) {

    this.url = 'https://localhost:44347/api/';
   }

  getPuestos(){
    return this._http.get<Puesto[]>(this.url+'puestos');
  }

  addPuesto(puesto: Puesto){
    let params = puesto;
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this._http.post(this.url+'puestos', params, {headers:headers});
  }

  deletePuesto(puesto){
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this._http.delete(this.url+'puestos/'+puesto.puestoID, {headers:headers});
  }

  editPuesto(puesto: Puesto){
    let params = puesto;
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this._http.put(this.url+'puestos/editPuesto', params, {headers:headers});
  }

  getEmpleados(){
    return this._http.get<Empleado[]>(this.url+'empleados');
  }

  addEmpleado(empleado: Empleado){
    let params = empleado;
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this._http.post(this.url+'empleados', params, {headers:headers});
  }

  deleteEmpleado(empleado){
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this._http.delete(this.url+'empleados/'+empleado.empleadoID, {headers:headers});
  }

  editEmpleado(empleado: Empleado){
    let params = empleado;
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this._http.put(this.url+'empleados/editEmpleado', params, {headers:headers});
  }

}
