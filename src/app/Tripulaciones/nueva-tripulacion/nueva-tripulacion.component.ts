import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Miembro } from 'src/app/Modelos/Miembro';
import { Tripulacion } from 'src/app/Modelos/Tripulacion';
import { Vuelo } from 'src/app/Modelos/Vuelo';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { TripulacionesService } from 'src/app/Servicios/tripulaciones.service';
import { VuelosService } from 'src/app/Servicios/vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-tripulacion',
  templateUrl: './nueva-tripulacion.component.html',
  styleUrls: ['./nueva-tripulacion.component.css']
})
export class NuevaTripulacionComponent implements OnInit {

  formulario = new FormGroup({
    vueloId : new FormControl('', [Validators.required]),
    miembroId: new FormControl('', [Validators.required]),
  });

  tripulacionId:number=0;
  listaMiembros : Miembro[]=[];
  listaVuelos : Vuelo[]=[];

  constructor(private fb: FormBuilder,
    private servicio: TripulacionesService, 
    private rutas: Router,
    private rutaActiva:ActivatedRoute,
    private servicioMiembro:MiembrosService,
    private servicioVuelo:VuelosService) { 
      this.listarVuelos();
      this.listarMiembros();

      this.tripulacionId = this.rutaActiva.snapshot.params.id;
      if(this.tripulacionId!=undefined){
        this.cargarTripulacion(this.tripulacionId);
      }else{
        this.tripulacionId=0;
      }
    }

  ngOnInit(): void {
    this.fb.control(this.formulario);
  }

  get color() {return this.formulario.get('El campo es requerido');}

  listarMiembros(){
    this.servicioMiembro.listar().subscribe(x=>{
      this.listaMiembros=x;

    });
  }

  listarVuelos(){
    this.servicioVuelo.listar().subscribe(x=>{
      this.listaVuelos=x;
      console.table(x);
    });
  }



  guardar(){
    if(this.tripulacionId==0){
      let objeto: Tripulacion = Object.assign({}, this.formulario.value);
      this.servicio.ingresar(objeto)
      .subscribe(datos => {
        Swal.fire("Tripulaciones","Registro exitoso","success");
        this.rutas.navigate(['/tripulaciones']);
      }, error => {
        console.table(error);
        Swal.fire("Tripulaciones","A ocurrido un error","error");
        this.rutas.navigate(['/tripulaciones']);
      }
      );
    }else{
      let objeto: Tripulacion = Object.assign({}, this.formulario.value);
      objeto.tripulacionId=this.tripulacionId;
      this.servicio.editar(objeto,this.tripulacionId)
      .subscribe(datos => {
        Swal.fire("Tripulaciones","Registro editado con éxito","success");
        this.rutas.navigate(['/tripulaciones']);
      }, error => {
        console.log(error);
        Swal.fire("Tripulaciones","A ocurrido un error","error");
        this.rutas.navigate(['/tripulaciones']);
      }
      );
    }

  }


  cargarTripulacion(id:number){
      //this.formulario.controls.codigo.patchValue("");
      this.servicio.unRegistro(id).subscribe(x=>{
        this.formulario.patchValue(Object.assign({},x));
      });

  }

}
