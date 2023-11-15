import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarMascotaPageRoutingModule } from './buscar-mascota-routing.module';

import { BuscarMascotaPage } from './buscar-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarMascotaPageRoutingModule
  ],
  declarations: [BuscarMascotaPage]
})
export class BuscarMascotaPageModule {}
