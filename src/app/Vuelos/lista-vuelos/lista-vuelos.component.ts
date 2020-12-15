import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/Modelos/Vuelo';
import { VuelosService } from 'src/app/Servicios/vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent implements OnInit {

  constructor(private servicio:VuelosService,private rutas: Router) { }
  listaVuelos : Vuelo[]=[];
  ngOnInit(): void {
    this.cargarVuelos();
  }

 async cargarVuelos(){
    await this.servicio.listar().subscribe(
      datos=>this.listaVuelos=datos    
    );

  }

  async editar(id){
    alert("editar"+id);
  }
  async eliminar(id){
    Swal.fire({
      title: 'Vuelos',
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
      Swal.fire("Vuelos","Registro eliminado con éxito","success");
      this.cargarVuelos();
    }, error => {
      console.log(error);
      Swal.fire("Vuelos",error,"error");
      this.rutas.navigate(['/vuelos']);
    }
    );
  }


}
