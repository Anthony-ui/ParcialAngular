  import { BaseService } from 'src/app/Servicios/base.service';
  import { Component, OnInit } from '@angular/core';
  import Swal from 'sweetalert2';
  import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Base } from 'src/app/Modelos/Base';




  @Component({
    selector: 'app-nueva-base',
    templateUrl: './nueva-base.component.html',
    styleUrls: ['./nueva-base.component.css']
  })
  export class NuevaBaseComponent implements OnInit {

    formulario = new FormGroup({

      nombre : new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
    

    });
    baseId:number=0;
    codigoAnterior:string="";



    constructor(private fb: FormBuilder,
      private servicio: BaseService, private rutas: Router,private rutaActiva:ActivatedRoute) { 

        this.baseId = this.rutaActiva.snapshot.params.id;
        if(this.baseId!=undefined){
          this.cargarMiembro(this.baseId);
        }else{
          this.baseId=0;
        }




      }

    ngOnInit(): void {
      this.fb.control(this.formulario);

    }
    get color() {return this.formulario.get('El campo es requerido');}

    
    insertar(){
      if(this.baseId==0){
        let objeto: Base = Object.assign({}, this.formulario.value);
        this.servicio.ingresar(objeto)
        .subscribe(datos => {
          Swal.fire("Bases","Registro exitoso","success");
          this.rutas.navigate(['/bases']);
        }, error => {
          console.table(error);
          Swal.fire("Bases","A ocurrido un error","error");
          this.rutas.navigate(['/bases']);
        }
        );
      }else{
        let objeto: Base = Object.assign({}, this.formulario.value);
        objeto.baseId=this.baseId;
        this.servicio.editar(objeto,this.baseId)
        .subscribe(datos => {
          Swal.fire("Bases","Registro editado con éxito","success");
          this.rutas.navigate(['/bases']);
        }, error => {
          console.log(error);
          Swal.fire("Bases","A ocurrido un error","error");
          this.rutas.navigate(['/bases']);
        }
        );
      }
      


    }


      
    cargarMiembro(id:number){
      //this.formulario.controls.codigo.patchValue("");
      this.servicio.unRegistro(id).subscribe(x=>{
        this.formulario.patchValue(Object.assign({},x));
        this.codigoAnterior=x.nombre;
      });

  }
    

  }

