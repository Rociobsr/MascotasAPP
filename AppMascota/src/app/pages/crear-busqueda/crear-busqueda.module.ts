import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearBusquedaPageRoutingModule } from './crear-busqueda-routing.module';

import { CrearBusquedaPage } from './crear-busqueda.page';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearBusquedaPageRoutingModule
  ],
  declarations: [CrearBusquedaPage,MapComponent]
})
export class CrearBusquedaPageModule {}
