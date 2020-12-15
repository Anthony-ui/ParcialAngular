import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tripulacion } from '../Modelos/Tripulacion';

@Injectable({
  providedIn: 'root'
})
export class TripulacionesService {
  private apiURL = 'https://localhost:44328/api/tripulaciones';
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Tripulacion[]>{
    return this.http.get<Tripulacion[]>(this.apiURL);
  }
  unRegistro(TripulacionId: number): Observable<Tripulacion>{
    return this.http.get<Tripulacion>(this.apiURL +'/'+ TripulacionId);
  }
  ingresar(Tripulacion: Tripulacion): Observable<Tripulacion>{
    return this.http.post<Tripulacion>(this.apiURL, Tripulacion);
  }

  editar(Tripulacion: Tripulacion,id:number): Observable<Tripulacion>{
    return this.http.put<Tripulacion>(this.apiURL+'/'+id, Tripulacion);
  }

  eliminar(id: number): Observable<Tripulacion>{
    return this.http.delete<Tripulacion>(this.apiURL+"/"+id);
  }


}
