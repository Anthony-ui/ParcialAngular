import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piloto } from '../Modelos/Piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  private apiURL = 'https://localhost:44328/api/Pilotos';
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Piloto[]>{
    return this.http.get<Piloto[]>(this.apiURL);
  }
  unRegistro(PilotoId: number): Observable<Piloto>{
    return this.http.get<Piloto>(this.apiURL +'/'+ PilotoId);
  }
  ingresar(Piloto: Piloto): Observable<Piloto>{
    return this.http.post<Piloto>(this.apiURL, Piloto);
  }

  editar(Piloto: Piloto,id:number): Observable<Piloto>{
    return this.http.put<Piloto>(this.apiURL+'/'+id, Piloto);
  }

  eliminar(id: number): Observable<Piloto>{
    return this.http.delete<Piloto>(this.apiURL+"/"+id);
  }

  verificarCodigoRepetido(codigo:string){
    const params = new HttpParams()
    .set('codigo', codigo);
   return this.http.get(this.apiURL+'/repetido',{responseType: 'text',params});
}

}
