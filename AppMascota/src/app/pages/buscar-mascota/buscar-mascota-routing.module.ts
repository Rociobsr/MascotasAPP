import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarMascotaPage } from './buscar-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarMascotaPageRoutingModule {}
