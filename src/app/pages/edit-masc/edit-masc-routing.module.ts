import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMascPage } from './edit-masc.page';
const routes: Routes = [
  {
    path: '',
    component: EditMascPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMascPageRoutingModule {}
