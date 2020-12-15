import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../Modelos/Mantenimiento';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {
  private apiURL = 'https://localhost:44328/api/Mantenimientos';
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Mantenimiento[]>{
    return this.http.get<Mantenimiento[]>(this.apiURL);
  }
  unRegistro(MantenimientoId: number): Observable<Mantenimiento>{
    return this.http.get<Mantenimiento>(this.apiURL +'/'+ MantenimientoId);
  }
  ingresar(Mantenimiento: Mantenimiento): Observable<Mantenimiento>{
    return this.http.post<Mantenimiento>(this.apiURL, Mantenimiento);
  }

  editar(Mantenimiento: Mantenimiento,id:number): Observable<Mantenimiento>{
    return this.http.put<Mantenimiento>(this.apiURL+'/'+id, Mantenimiento);
  }

  eliminar(id: number): Observable<Mantenimiento>{
    return this.http.delete<Mantenimiento>(this.apiURL+"/"+id);
  }


}
