import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Miembro } from "../../Modelos/Miembro";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-miembro',
  templateUrl: './lista-miembro.component.html',
  styleUrls: ['./lista-miembro.component.css']
})
export class ListaMiembroComponent implements OnInit {

  constructor(private servicio:MiembrosService,private rutas: Router) { }
  listaMiembros : Miembro[]=[];

  ngOnInit(): void {

    this.cargarMiembros();
  }

  async cargarMiembros(){
    await this.servicio.listar().subscribe(
      datos=>this.listaMiembros=datos
    );

  }



  async editar(id){
    alert("editar"+id);
  }
  async eliminar(id){
    Swal.fire({
      title: 'Miembros',
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
      Swal.fire("Miembros","Miembro eliminado con éxito","success");
      this.cargarMiembros();
    }, error => {
      console.log(error);
      Swal.fire("Miembros",error,"error");
      this.rutas.navigate(['/miembros']);
    }
    );
  }


}