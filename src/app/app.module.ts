import { NuevoComponent } from './Aviones/nuevo/nuevo.component';
import { ListaComponent } from './Aviones/lista/lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaPilotosComponent } from './Pilotos/lista-pilotos/lista-pilotos.component';
import { NuevoPilotoComponent } from './Pilotos/nuevo-piloto/nuevo-piloto.component';
import { ListaVuelosComponent } from './Vuelos/lista-vuelos/lista-vuelos.component';
import { NuevoVueloComponent } from './Vuelos/nuevo-vuelo/nuevo-vuelo.component';
import { ListaTripulacionesComponent } from './Tripulaciones/lista-tripulaciones/lista-tripulaciones.component';
import { NuevaTripulacionComponent } from './Tripulaciones/nueva-tripulacion/nueva-tripulacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NuevoComponent,
    ListaPilotosComponent,
    NuevoPilotoComponent,
    ListaVuelosComponent,
    NuevoVueloComponent,
    ListaTripulacionesComponent,
    NuevaTripulacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
