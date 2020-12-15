import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Base } from "../../Modelos/Base";
import Swal from 'sweetalert2';
import { BaseService } from 'src/app/Servicios/base.service';

@Component({
  selector: 'app-lista-base',
  templateUrl: './lista-base.component.html',
  styleUrls: ['./lista-base.component.css']
})
export class ListaBaseComponent implements OnInit {

  constructor(private servicio:BaseService,private rutas: Router) { }
  listaBases : Base[]=[];

  ngOnInit(): void {


    this.cargarBase();
  }






  async cargarBase(){
    await this.servicio.listar().subscribe(
      datos=>this.listaBases=datos
    );

  }



  async editar(id){
    alert("editar"+id);
  }
  async eliminar(id){
    Swal.fire({
      title: 'Bases',
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
      Swal.fire("Bases","Base eliminada con éxito","success");
      this.cargarBase();
    }, error => {
      console.log(error);
      Swal.fire("Bases",error,"error");
      this.rutas.navigate(['/Bases']);
    }
    );
  }


}