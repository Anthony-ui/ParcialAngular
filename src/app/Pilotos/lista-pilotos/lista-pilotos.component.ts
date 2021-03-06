import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PilotosService } from 'src/app/Servicios/pilotos.service';
import { Piloto } from 'src/app/Modelos/Piloto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-pilotos',
  templateUrl: './lista-pilotos.component.html',
  styleUrls: ['./lista-pilotos.component.css']
})
export class ListaPilotosComponent implements OnInit {

  constructor(private servicio:PilotosService,private rutas: Router) { }
  listaPilotos : Piloto[]=[];
  ngOnInit(): void {
    this.cargarPilotos();
  }

 async cargarPilotos(){
    await this.servicio.listar().subscribe(
      datos=>this.listaPilotos=datos    
    );

  }

  async editar(id){
    alert("editar"+id);
  }
  async eliminar(id){
    Swal.fire({
      title: 'Pilotos',
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
      Swal.fire("Pilotos","Registro eliminado con éxito","success");
      this.cargarPilotos();
    }, error => {
      console.log(error);
      Swal.fire("Pilotos",error,"error");
      this.rutas.navigate(['/Pilotos']);
    }
    );
  }

}
