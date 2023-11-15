import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ListarUsuariosPageRoutingModule } from './listar-usuarios-routing.module';

import { ListarUsuariosPage } from './listar-usuarios.page';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListarUsuariosPageRoutingModule
  ],
  declarations: [ListarUsuariosPage]
})
export class ListarUsuariosPageModule {}
