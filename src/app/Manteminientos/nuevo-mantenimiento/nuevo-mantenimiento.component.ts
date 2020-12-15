import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from 'src/app/Modelos/Avion';
import { Base } from 'src/app/Modelos/Base';
import { Mantenimiento } from 'src/app/Modelos/Mantenimiento';
import { AvionesService } from 'src/app/Servicios/aviones.service';
import { BaseService } from 'src/app/Servicios/base.service';
import { MantenimientosService } from 'src/app/Servicios/mantenimientos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-mantenimiento',
  templateUrl: './nuevo-mantenimiento.component.html',
  styleUrls: ['./nuevo-mantenimiento.component.css']
})
export class NuevoMantenimientoComponent implements OnInit {

  formulario = new FormGroup({
    fecha : new FormControl('', [Validators.required]),
    detalle: new FormControl('', [Validators.required]),
    baseId: new FormControl('', [Validators.required]),
    avionId: new FormControl('', [Validators.required]),

  });

  mantenimientoId:number=0;
  listaBases : Base[]=[];
  listaAviones : Avion[]=[];

  constructor(private fb: FormBuilder,
    private servicio: MantenimientosService, 
    private rutas: Router,
    private rutaActiva:ActivatedRoute,
    private servicioAvion:AvionesService,
    private servicioBase:BaseService) { 
      this.listarAviones();
      this.listarBases();
      this.mantenimientoId = this.rutaActiva.snapshot.params.id;
      if(this.mantenimientoId!=undefined){
        this.cargarMantenimiento(this.mantenimientoId);
      }else{
        this.mantenimientoId=0;
      }
    }

  ngOnInit(): void {
    this.fb.control(this.formulario);
  }

  get color() {return this.formulario.get('El campo es requerido');}

  listarAviones(){
    this.servicioAvion.listar().subscribe(x=>{
      this.listaAviones=x;
    });
  }

  listarBases(){
    this.servicioBase.listar().subscribe(x=>{
      this.listaBases=x;
    });
  }



  guardar(){

    if(this.mantenimientoId==0){
      let objeto: Mantenimiento = Object.assign({}, this.formulario.value);
      this.servicio.ingresar(objeto)
      .subscribe(datos => {
        Swal.fire("Mantenimientos","Registro exitoso","success");
        this.rutas.navigate(['/mantenimientos']);
      }, error => {
        console.table(error);
        Swal.fire("Mantenimientos","A ocurrido un error","error");
        this.rutas.navigate(['/mantenimientos']);
      }
      );
    }else{
      let objeto: Mantenimiento = Object.assign({}, this.formulario.value);
      objeto.mantenimientoId=this.mantenimientoId;
      this.servicio.editar(objeto,this.mantenimientoId)
      .subscribe(datos => {
        Swal.fire("Mantenimientos","Registro editado con éxito","success");
        this.rutas.navigate(['/mantenimientos']);
      }, error => {
        console.log(error);
        Swal.fire("Mantenimientos","A ocurrido un error","error");
        this.rutas.navigate(['/mantenimientos']);
      }
      );
    }
 




  }

  cargarMantenimiento(id:number){
      //this.formulario.controls.codigo.patchValue("");
      this.servicio.unRegistro(id).subscribe(x=>{
        this.formulario.patchValue(Object.assign({},x));

      });

  }

}
