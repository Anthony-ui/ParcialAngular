import { NuevoPilotoComponent } from './Pilotos/nuevo-piloto/nuevo-piloto.component';
import { ListaPilotosComponent } from './Pilotos/lista-pilotos/lista-pilotos.component';
import { NuevoComponent } from './Aviones/nuevo/nuevo.component';
import { ListaComponent } from './Aviones/lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'aviones', component: ListaComponent},
  {path: 'nuevoAvion', component: NuevoComponent},
  {path: 'editarAvion/:id', component: NuevoComponent},
  {path: 'pilotos', component: ListaPilotosComponent},
  {path: 'nuevoPiloto', component: NuevoPilotoComponent},
  {path: 'editarPiloto/:id', component: NuevoPilotoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
