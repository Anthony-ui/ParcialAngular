import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Base } from "../Modelos/Base";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private apiURL = 'https://localhost:44328/api/bases';
  constructor(private http: HttpClient) { }


  listar(): Observable<Base[]>{
    return this.http.get<Base[]>(this.apiURL);
  }
  unRegistro(baseId: number): Observable<Base>{
    return this.http.get<Base>(this.apiURL +'/'+ baseId);
  }
  ingresar(Base: Base): Observable<Base>{
    return this.http.post<Base>(this.apiURL, Base);
  }

  editar(Base: Base,id:number): Observable<Base>{
    return this.http.put<Base>(this.apiURL+'/'+id, Base);
  }

  eliminar(id: number): Observable<Base>{
    return this.http.delete<Base>(this.apiURL+"/"+id);
  }

  verificarCodigoRepetido(codigo:string){
    const params = new HttpParams()
    .set('codigo', codigo);
   return this.http.get(this.apiURL+'/repetido',{responseType: 'text',params});
}


}