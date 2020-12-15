import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Piloto } from 'src/app/Modelos/Piloto';
import { PilotosService } from 'src/app/Servicios/pilotos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-piloto',
  templateUrl: './nuevo-piloto.component.html',
  styleUrls: ['./nuevo-piloto.component.css']
})
export class NuevoPilotoComponent implements OnInit {

  formulario = new FormGroup({
    codigo : new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    horasVuelo: new FormControl('', [Validators.required]),

  });

  pilotoId:number=0;
  codigoAnterior:string="";
  constructor(private fb: FormBuilder,
    private servicio: PilotosService, private rutas: Router,private rutaActiva:ActivatedRoute) { 
      this.pilotoId = this.rutaActiva.snapshot.params.id;
      if(this.pilotoId!=undefined){
        this.cargarPiloto(this.pilotoId);
      }else{
        this.pilotoId=0;
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
    Swal.fire("Pilotos","El código ingresado ya existe","warning");
      }else{
      this.insertar();
      }
    });
    }

  }


  insertar(){
if(this.pilotoId==0){
  let objeto: Piloto = Object.assign({}, this.formulario.value);
  this.servicio.ingresar(objeto)
  .subscribe(datos => {
    Swal.fire("Pilotos","Registro exitoso","success");
    this.rutas.navigate(['/pilotos']);
  }, error => {
    console.table(error);
    Swal.fire("Pilotos","A ocurrido un error","error");
    this.rutas.navigate(['/pilotos']);
  }
  );
}else{
  let objeto: Piloto = Object.assign({}, this.formulario.value);
  objeto.pilotoId=this.pilotoId;
  this.servicio.editar(objeto,this.pilotoId)
  .subscribe(datos => {
    Swal.fire("Pilotos","Registro editado con éxito","success");
    this.rutas.navigate(['/pilotos']);
  }, error => {
    console.log(error);
    Swal.fire("Pilotos","A ocurrido un error","error");
    this.rutas.navigate(['/pilotos']);
  }
  );
}


  }

  cargarPiloto(id:number){
      //this.formulario.controls.codigo.patchValue("");
      this.servicio.unRegistro(id).subscribe(x=>{
        this.formulario.patchValue(Object.assign({},x));
        this.codigoAnterior=x.codigo;
      });

  }

}
