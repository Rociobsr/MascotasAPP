import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IonicModule } from '@ionic/angular';
import { CompdosComponent } from './components/compdos/compdos.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path: 'edit-masc/:id',
    loadChildren: () => import('./pages/edit-masc/edit-masc.module').then( m => m.EditMascPageModule),
    canActivate:[IngresadoGuard]
  },

  {
    path: 'buscar-mascota',
    loadChildren: () => import('./pages/buscar-mascota/buscar-mascota.module').then( m => m.BuscarMascotaPageModule),
  },
  {
    path: 'crear-busqueda',
    loadChildren: () => import('./crear-busqueda/crear-busqueda.module').then( m => m.CrearBusquedaPageModule)
  },
  {
    path: 'listar-usuarios',
    loadChildren: () => import('./pages/listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),IonicModule,FormsModule
  ],
  exports: [RouterModule],  declarations: [
    // Otros componentes declarados aquí
    CompdosComponent,
  ]
})
export class AppRoutingModule { }
