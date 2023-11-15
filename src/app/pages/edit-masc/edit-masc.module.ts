import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMascPageRoutingModule } from './edit-masc-routing.module';

import { EditMascPage } from './edit-masc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMascPageRoutingModule
  ],
  declarations: [EditMascPage]
})
export class EditMascPageModule {}
