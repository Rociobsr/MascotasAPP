import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncontrarMascotaPage } from './encontrar-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: EncontrarMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncontrarMascotaPageRoutingModule {}
