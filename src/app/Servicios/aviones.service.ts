import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avion } from '../Modelos/Avion';

@Injectable({
  providedIn: 'root'
})
export class AvionesService {

  private apiURL = 'https://localhost:44328/api/aviones';
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Avion[]>{
    return this.http.get<Avion[]>(this.apiURL);
  }
  unRegistro(AvionId: number): Observable<Avion>{
    return this.http.get<Avion>(this.apiURL +'/'+ AvionId);
  }
  ingresar(avion: Avion): Observable<Avion>{
    return this.http.post<Avion>(this.apiURL, avion);
  }

  editar(avion: Avion,id:number): Observable<Avion>{
    return this.http.put<Avion>(this.apiURL+'/'+id, avion);
  }

  eliminar(id: number): Observable<Avion>{
    return this.http.delete<Avion>(this.apiURL+"/"+id);
  }

  verificarCodigoRepetido(codigo:string){
    const params = new HttpParams()
    .set('codigo', codigo);
   return this.http.get(this.apiURL+'/repetido',{responseType: 'text',params});
}


  
  
}
