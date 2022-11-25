import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSalariePageRoutingModule } from './ajouter-salarie-routing.module';

import { AjouterSalariePage } from './ajouter-salarie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSalariePageRoutingModule
  ],
  declarations: [AjouterSalariePage]
})
export class AjouterSalariePageModule {}
