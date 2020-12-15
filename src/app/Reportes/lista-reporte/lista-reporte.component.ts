import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/Modelos/Vuelo';
import { VuelosService } from 'src/app/Servicios/vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-reporte',
  templateUrl: './lista-reporte.component.html',
  styleUrls: ['./lista-reporte.component.css']
})
export class ListaReporteComponent implements OnInit {

  constructor(private servicio:VuelosService,private rutas: Router) { }
  listaVuelos : Vuelo[]=[];
  ngOnInit(): void {
    this.cargarVuelos();
  }

 async cargarVuelos(){
    await this.servicio.listarReporte().subscribe(
      datos=>this.listaVuelos=datos    
    );

  }
}
