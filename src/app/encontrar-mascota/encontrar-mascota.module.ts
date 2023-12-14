import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncontrarMascotaPageRoutingModule } from './encontrar-mascota-routing.module';

import { EncontrarMascotaPage } from './encontrar-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncontrarMascotaPageRoutingModule
  ],
  declarations: [EncontrarMascotaPage]
})
export class EncontrarMascotaPageModule {}
