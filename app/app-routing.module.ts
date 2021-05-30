import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'reg',
    loadChildren: () => import('./pages/reg/reg.module').then(m => m.RegModule),
},{
  path: 'patient',
  loadChildren: () => import('./pages/patient/card/patient-card.module').then(m => m.PatientCardModule),
},
  /*{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
