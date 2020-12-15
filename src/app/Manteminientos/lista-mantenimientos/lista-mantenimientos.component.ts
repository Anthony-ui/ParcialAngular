import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mantenimiento } from 'src/app/Modelos/Mantenimiento';
import { MantenimientosService } from 'src/app/Servicios/mantenimientos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-mantenimientos',
  templateUrl: './lista-mantenimientos.component.html',
  styleUrls: ['./lista-mantenimientos.component.css']
})
export class ListaMantenimientosComponent implements OnInit {

  constructor(private servicio:MantenimientosService,private rutas: Router) { }
  listaMantenimientos : Mantenimiento[]=[];
  ngOnInit(): void {
    this.cargarMantenimientos();
  }

 async cargarMantenimientos(){
    await this.servicio.listar().subscribe(
      datos=>this.listaMantenimientos=datos    
    );

  }

  async editar(id){
    alert("editar"+id);
  }
  async eliminar(id){
    Swal.fire({
      title: 'Mantenimientos',
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
      Swal.fire("Mantenimientos","Registro eliminado con éxito","success");
      this.cargarMantenimientos();
    }, error => {
      console.log(error);
      Swal.fire("Mantenimientos",error,"error");
      this.rutas.navigate(['/mantenimientos']);
    }
    );
  }
}
