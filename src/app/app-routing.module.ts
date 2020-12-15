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
import { ListaMiembroComponent } from './Miembro/lista-miembro/lista-miembro.component';
import { NuevoMiembroComponent } from './Miembro/nuevo-miembro/nuevo-miembro.component';
import { NuevaBaseComponent } from './Base/nueva-base/nueva-base.component';
import { ListaBaseComponent } from './Base/lista-base/lista-base.component';
import { ListaMantenimientosComponent } from './Manteminientos/lista-mantenimientos/lista-mantenimientos.component';
import { NuevoMantenimientoComponent } from './Manteminientos/nuevo-mantenimiento/nuevo-mantenimiento.component';
import { ListaReporteComponent } from './Reportes/lista-reporte/lista-reporte.component';


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
  {path: 'editarTripulacion/:id', component: NuevaTripulacionComponent},
  {path: 'miembros', component: ListaMiembroComponent},
  {path: 'nuevoMiembro', component: NuevoMiembroComponent},
  {path: 'editarMiembro/:id', component: NuevoMiembroComponent},
  {path: 'bases', component: ListaBaseComponent},
  {path: 'nuevaBase', component: NuevaBaseComponent},
  {path: 'editarBase/:id', component: NuevaBaseComponent},
  {path: 'mantenimientos', component: ListaMantenimientosComponent},
  {path: 'nuevoMantenimiento', component: NuevoMantenimientoComponent},
  {path: 'editarMantenimiento/:id', component: NuevoMantenimientoComponent},
  {path: 'reportes', component: ListaReporteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
