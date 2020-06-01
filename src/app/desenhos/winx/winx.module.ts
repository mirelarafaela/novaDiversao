import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinxPageRoutingModule } from './winx-routing.module';

import { WinxPage } from './winx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinxPageRoutingModule
  ],
  declarations: [WinxPage]
})
export class WinxPageModule {}
