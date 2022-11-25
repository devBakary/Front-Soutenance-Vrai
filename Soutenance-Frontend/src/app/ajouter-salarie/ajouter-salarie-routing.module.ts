import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSalariePage } from './ajouter-salarie.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSalariePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSalariePageRoutingModule {}
