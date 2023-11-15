import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearBusquedaPage } from './crear-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: CrearBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearBusquedaPageRoutingModule {}
