import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from 'src/app/Modelos/Avion';
import { Piloto } from 'src/app/Modelos/Piloto';
import { Vuelo } from 'src/app/Modelos/Vuelo';
import { AvionesService } from 'src/app/Servicios/aviones.service';
import { PilotosService } from 'src/app/Servicios/pilotos.service';
import { VuelosService } from 'src/app/Servicios/vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-vuelo',
  templateUrl: './nuevo-vuelo.component.html',
  styleUrls: ['./nuevo-vuelo.component.css']
})
export class NuevoVueloComponent implements OnInit {

  formulario = new FormGroup({
    codigo : new FormControl('', [Validators.required]),
    fechaSalida: new FormControl('', [Validators.required]),
    fechaLlegada: new FormControl('', [Validators.required]),
    ciudadOrigen: new FormControl('', [Validators.required]),
    ciudadDestino: new FormControl('', [Validators.required]),
    pilotoId: new FormControl('', [Validators.required]),
    avionId: new FormControl('', [Validators.required]),

  });

  vueloId:number=0;
  listaPilotos : Piloto[]=[];
  listaAviones : Avion[]=[];
  codigoAnterior:string="";
  constructor(private fb: FormBuilder,
    private servicio: VuelosService, 
    private rutas: Router,
    private rutaActiva:ActivatedRoute,
    private servicioAvion:AvionesService,
    private servicioPiloto:PilotosService) { 
      this.listarAviones();
      this.listarPilotos();
      this.vueloId = this.rutaActiva.snapshot.params.id;
      if(this.vueloId!=undefined){
        this.cargarVuelo(this.vueloId);
      }else{
        this.vueloId=0;
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

  listarPilotos(){
    this.servicioPiloto.listar().subscribe(x=>{
      this.listaPilotos=x;
    });
  }



  guardar(){
    var codigo=this.formulario.controls['codigo'].value;
    if(codigo.trim()==this.codigoAnterior){
      this.insertar();
    }else{

   this.servicio.verificarCodigoRepetido(codigo).subscribe(x=>{
      if(x=="ok"){
    Swal.fire("Vuelos","El código ingresado ya existe","warning");
      }else{
      this.insertar();
      }
    });
    }

  }


  insertar(){
if(this.vueloId==0){
  let objeto: Vuelo = Object.assign({}, this.formulario.value);
  this.servicio.ingresar(objeto)
  .subscribe(datos => {
    Swal.fire("Vuelos","Registro exitoso","success");
    this.rutas.navigate(['/vuelos']);
  }, error => {
    console.table(error);
    Swal.fire("Vuelos","A ocurrido un error","error");
    this.rutas.navigate(['/vuelos']);
  }
  );
}else{
  let objeto: Vuelo = Object.assign({}, this.formulario.value);
  objeto.vueloId=this.vueloId;
  this.servicio.editar(objeto,this.vueloId)
  .subscribe(datos => {
    Swal.fire("Vuelos","Registro editado con éxito","success");
    this.rutas.navigate(['/vuelos']);
  }, error => {
    console.log(error);
    Swal.fire("Vuelos","A ocurrido un error","error");
    this.rutas.navigate(['/vuelos']);
  }
  );
}


  }

  cargarVuelo(id:number){
      //this.formulario.controls.codigo.patchValue("");
      this.servicio.unRegistro(id).subscribe(x=>{
        this.formulario.patchValue(Object.assign({},x));
        this.codigoAnterior=x.codigo;
      });

  }
}
