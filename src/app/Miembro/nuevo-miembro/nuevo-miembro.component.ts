import { AvionesService } from './../../Servicios/aviones.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Miembro } from 'src/app/Modelos/Miembro';
import { MiembrosService } from 'src/app/Servicios/miembros.service';


@Component({
  selector: 'app-nuevo-miembro',
  templateUrl: './nuevo-miembro.component.html',
  styleUrls: ['./nuevo-miembro.component.css']
})
export class NuevoMiembroComponent implements OnInit {


  formulario = new FormGroup({

    cedula : new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required])

  });
  miembroId:number=0;
  codigoAnterior:string="";




  constructor(private fb: FormBuilder,
    private servicio: MiembrosService, private rutas: Router,private rutaActiva:ActivatedRoute) { 


      this.miembroId = this.rutaActiva.snapshot.params.id;
      if(this.miembroId!=undefined){
        this.cargarMiembro(this.miembroId);
      }else{
        this.miembroId=0;
      }








    }

  ngOnInit(): void {

    this.fb.control(this.formulario);

  }
  get color() {return this.formulario.get('El campo es requerido');}

  insertar(){
    if(this.miembroId==0){
      let objeto: Miembro = Object.assign({}, this.formulario.value);
      this.servicio.ingresar(objeto)
      .subscribe(datos => {
        Swal.fire("Miembros","Registro exitoso","success");
        this.rutas.navigate(['/miembros']);
      }, error => {
        console.table(error);
        Swal.fire("Miembros","A ocurrido un error","error");
        this.rutas.navigate(['/miembros']);
      }
      );
    }else{
      let objeto: Miembro = Object.assign({}, this.formulario.value);
      objeto.miembroId=this.miembroId;
      this.servicio.editar(objeto,this.miembroId)
      .subscribe(datos => {
        Swal.fire("Miembros","Registro editado con éxito","success");
        this.rutas.navigate(['/miembros']);
      }, error => {
        console.log(error);
        Swal.fire("Miembros","A ocurrido un error","error");
        this.rutas.navigate(['/miembros']);
      }
      );
    }
    
      }




  guardar(){
    var codigo=this.formulario.controls['cedula'].value;
    if(codigo.trim()==this.codigoAnterior){
      this.insertar();
    }else{

   this.servicio.verificarCodigoRepetido(codigo).subscribe(x=>{
      if(x=="ok"){
    Swal.fire("Miembros","El Usuario ingresado ya existe","warning");
      }else{
      this.insertar();
      }
    });
    }

  }










  
  cargarMiembro(id:number){
    //this.formulario.controls.codigo.patchValue("");
    this.servicio.unRegistro(id).subscribe(x=>{
      this.formulario.patchValue(Object.assign({},x));
      this.codigoAnterior=x.cedula;
    });

}

}

