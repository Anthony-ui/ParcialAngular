import { Router } from '@angular/router';
import { AvionesService } from './../../Servicios/aviones.service';
import { Component, OnInit } from '@angular/core';
import { Avion } from 'src/app/Modelos/Avion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private servicio:AvionesService,private rutas: Router) { }
  listaAviones : Avion[]=[];
  ngOnInit(): void {
    this.cargarAviones();
  }

 async cargarAviones(){
    await this.servicio.listar().subscribe(
      datos=>this.listaAviones=datos    
    );

  }

  async editar(id){
    alert("editar"+id);
  }
  async eliminar(id){
    Swal.fire({
      title: 'Aviones',
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
      Swal.fire("Aviones","Registro eliminado con éxito","success");
      this.cargarAviones();
    }, error => {
      console.log(error);
      Swal.fire("Aviones",error,"error");
      this.rutas.navigate(['/aviones']);
    }
    );
  }

}
