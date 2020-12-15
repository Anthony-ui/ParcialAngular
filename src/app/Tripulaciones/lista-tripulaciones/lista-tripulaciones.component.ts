import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tripulacion } from 'src/app/Modelos/Tripulacion';
import { TripulacionesService } from 'src/app/Servicios/tripulaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tripulaciones',
  templateUrl: './lista-tripulaciones.component.html',
  styleUrls: ['./lista-tripulaciones.component.css']
})
export class ListaTripulacionesComponent implements OnInit {

  constructor(private servicio:TripulacionesService,private rutas: Router) { }
  listaTripulaciones : Tripulacion[]=[];
  ngOnInit(): void {
    this.cargarTripulaciones();
  }

 async cargarTripulaciones(){
    await this.servicio.listar().subscribe(
      datos=>this.listaTripulaciones=datos    
    );

  }

  async editar(id){
    alert("editar"+id);
  }
  async eliminar(id){
    Swal.fire({
      title: 'Tripulaciones',
      text: "Esta seguro que desea eliminar el registro",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarRegistro(id);
      }
    })
  }


  eliminarRegistro(id){
    this.servicio.eliminar(id)
    .subscribe(datos => {
      Swal.fire("Tripulaciones","Registro eliminado con éxito","success");
      this.cargarTripulaciones();
    }, error => {
      console.log(error);
      Swal.fire("Tripulaciones",error,"error");
      this.rutas.navigate(['/tripulaciones']);
    }
    );
  }

}
