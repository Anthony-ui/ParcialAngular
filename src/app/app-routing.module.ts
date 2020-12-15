import { NuevoPilotoComponent } from './Pilotos/nuevo-piloto/nuevo-piloto.component';
import { ListaPilotosComponent } from './Pilotos/lista-pilotos/lista-pilotos.component';
import { NuevoComponent } from './Aviones/nuevo/nuevo.component';
import { ListaComponent } from './Aviones/lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVuelosComponent } from './Vuelos/lista-vuelos/lista-vuelos.component';
import { NuevoVueloComponent } from './Vuelos/nuevo-vuelo/nuevo-vuelo.component';
import { ListaTripulacionesComponent } from './Tripulaciones/lista-tripulaciones/lista-tripulaciones.component';
import { NuevaTripulacionComponent } from './Tripulaciones/nueva-tripulacion/nueva-tripulacion.component';

const routes: Routes = [
  {path: 'aviones', component: ListaComponent},
  {path: 'nuevoAvion', component: NuevoComponent},
  {path: 'editarAvion/:id', component: NuevoComponent},
  {path: 'pilotos', component: ListaPilotosComponent},
  {path: 'nuevoPiloto', component: NuevoPilotoComponent},
  {path: 'editarPiloto/:id', component: NuevoPilotoComponent},
  {path: 'vuelos', component: ListaVuelosComponent},
  {path: 'nuevoVuelo', component: NuevoVueloComponent},
  {path: 'editarVuelo/:id', component: NuevoVueloComponent},
  {path: 'tripulaciones', component: ListaTripulacionesComponent},
  {path: 'nuevoTripulacion', component: NuevaTripulacionComponent},
  {path: 'editarTripulacion/:id', component: NuevaTripulacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
