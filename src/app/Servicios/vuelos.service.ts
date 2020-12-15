import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../Modelos/Vuelo';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private apiURL = 'https://localhost:44328/api/vuelos';
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Vuelo[]>{
    return this.http.get<Vuelo[]>(this.apiURL);
  }
  unRegistro(VueloId: number): Observable<Vuelo>{
    return this.http.get<Vuelo>(this.apiURL +'/'+ VueloId);
  }
  ingresar(Vuelo: Vuelo): Observable<Vuelo>{
    return this.http.post<Vuelo>(this.apiURL, Vuelo);
  }

  editar(Vuelo: Vuelo,id:number): Observable<Vuelo>{
    return this.http.put<Vuelo>(this.apiURL+'/'+id, Vuelo);
  }

  eliminar(id: number): Observable<Vuelo>{
    return this.http.delete<Vuelo>(this.apiURL+"/"+id);
  }

  verificarCodigoRepetido(codigo:string){
    const params = new HttpParams()
    .set('codigo', codigo);
   return this.http.get(this.apiURL+'/repetido',{responseType: 'text',params});
}

listarReporte():Observable<Vuelo[]>{
 return this.http.get<Vuelo[]>(this.apiURL+'/reporte');
}

}
