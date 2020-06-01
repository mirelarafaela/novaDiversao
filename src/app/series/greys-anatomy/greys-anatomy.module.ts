import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreysAnatomyPageRoutingModule } from './greys-anatomy-routing.module';

import { GreysAnatomyPage } from './greys-anatomy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreysAnatomyPageRoutingModule
  ],
  declarations: [GreysAnatomyPage]
})
export class GreysAnatomyPageModule {}
