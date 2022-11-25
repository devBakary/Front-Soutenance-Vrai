import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'ajouter-salarie',
    loadChildren: () => import('./ajouter-salarie/ajouter-salarie.module').then( m => m.AjouterSalariePageModule)
  },
  {
    path: 'ajouter-client',
    loadChildren: () => import('./ajouter-client/ajouter-client.module').then( m => m.AjouterClientPageModule)
  },
  {
    path: 'dette',
    loadChildren: () => import('./dette/dette.module').then( m => m.DettePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
