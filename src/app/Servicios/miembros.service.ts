import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Miembro } from '../Modelos/Miembro';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  private apiURL = 'https://localhost:44328/api/miembros';
  constructor(private http: HttpClient) { }


  listar(): Observable<Miembro[]>{
    return this.http.get<Miembro[]>(this.apiURL);
  }
  unRegistro(MiembroId: number): Observable<Miembro>{
    return this.http.get<Miembro>(this.apiURL +'/'+ MiembroId);
  }
  ingresar(miembro: Miembro): Observable<Miembro>{
    return this.http.post<Miembro>(this.apiURL, miembro);
  }

  editar(Miembro: Miembro,id:number): Observable<Miembro>{
    return this.http.put<Miembro>(this.apiURL+'/'+id, Miembro);
  }

  eliminar(id: number): Observable<Miembro>{
    return this.http.delete<Miembro>(this.apiURL+"/"+id);
  }

  verificarCodigoRepetido(codigo:string){
    const params = new HttpParams()
    .set('codigo', codigo);
   return this.http.get(this.apiURL+'/repetido',{responseType: 'text',params});
}
}
