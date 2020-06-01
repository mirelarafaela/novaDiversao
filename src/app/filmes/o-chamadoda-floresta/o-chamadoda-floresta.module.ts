import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OChamadodaFlorestaPageRoutingModule } from './o-chamadoda-floresta-routing.module';

import { OChamadodaFlorestaPage } from './o-chamadoda-floresta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OChamadodaFlorestaPageRoutingModule
  ],
  declarations: [OChamadodaFlorestaPage]
})
export class OChamadodaFlorestaPageModule {}
