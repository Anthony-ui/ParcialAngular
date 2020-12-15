import { AvionesService } from './../../Servicios/aviones.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from 'src/app/Modelos/Avion';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  formulario = new FormGroup({
    codigo : new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    capacidad: new FormControl('', [Validators.required]),

  });

  avionId:number=0;
  codigoAnterior:string="";
  constructor(private fb: FormBuilder,
    private servicio: AvionesService, private rutas: Router,private rutaActiva:ActivatedRoute) { 
      this.avionId = this.rutaActiva.snapshot.params.id;
      if(this.avionId!=undefined){
        this.cargarAvion(this.avionId);
      }else{
        this.avionId=0;
      }
    }

  ngOnInit(): void {
    this.fb.control(this.formulario);
  }

  get color() {return this.formulario.get('El campo es requerido');}


  guardar(){
    var codigo=this.formulario.controls['codigo'].value;
    if(codigo.trim()==this.codigoAnterior){
      this.insertar();
    }else{

   this.servicio.verificarCodigoRepetido(codigo).subscribe(x=>{
      if(x=="ok"){
    Swal.fire("Aviones","El código ingresado ya existe","warning");
      }else{
      this.insertar();
      }
    });
    }

  }


  insertar(){
if(this.avionId==0){
  let objeto: Avion = Object.assign({}, this.formulario.value);
  this.servicio.ingresar(objeto)
  .subscribe(datos => {
    Swal.fire("Aviones","Registro exitoso","success");
    this.rutas.navigate(['/aviones']);
  }, error => {
    console.table(error);
    Swal.fire("Aviones","A ocurrido un error","error");
    this.rutas.navigate(['/aviones']);
  }
  );
}else{
  let objeto: Avion = Object.assign({}, this.formulario.value);
  objeto.avionId=this.avionId;
  this.servicio.editar(objeto,this.avionId)
  .subscribe(datos => {
    Swal.fire("Aviones","Registro editado con éxito","success");
    this.rutas.navigate(['/aviones']);
  }, error => {
    console.log(error);
    Swal.fire("Aviones","A ocurrido un error","error");
    this.rutas.navigate(['/aviones']);
  }
  );
}


  }

  cargarAvion(id:number){
      //this.formulario.controls.codigo.patchValue("");
      this.servicio.unRegistro(id).subscribe(x=>{
        this.formulario.patchValue(Object.assign({},x));
        this.codigoAnterior=x.codigo;
      });

  }

}
