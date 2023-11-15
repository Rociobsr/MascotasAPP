import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CompunoComponent } from 'src/app/components/compuno/compuno.component';
import { CompdosComponent } from 'src/app/components/compdos/compdos.component';
import { ComptresComponent } from 'src/app/components/comptres/comptres.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'uno',
        component: CompunoComponent
      },
      {
        path: 'dos',
        component: CompdosComponent
      },
      {
        path: 'tres',
        component: ComptresComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
