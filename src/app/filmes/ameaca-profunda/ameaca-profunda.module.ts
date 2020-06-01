import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmeacaProfundaPageRoutingModule } from './ameaca-profunda-routing.module';

import { AmeacaProfundaPage } from './ameaca-profunda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmeacaProfundaPageRoutingModule
  ],
  declarations: [AmeacaProfundaPage]
})
export class AmeacaProfundaPageModule {}
