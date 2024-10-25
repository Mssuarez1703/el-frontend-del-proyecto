import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  url = 'http://localhost/rungympro/backend/controlador/informe.php';

  constructor(private http:HttpClient) { }

  consultar(){
    return this.http.get(`${this.url}?control=consulta`);
  }

  eliminar(id_informe:number){
    return this.http.get(`${this.url}?control=eliminar&id_informe=${id_informe}`);
  }

  insertar(params:any){
    return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
  }

  editar(id:number, params:any){
    return this.http.post(`${this.url}?control=editar&id=${id}`, JSON.stringify(params));
  }

  filtro(dato:any){
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
