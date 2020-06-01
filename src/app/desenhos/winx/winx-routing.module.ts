import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinxPage } from './winx.page';

const routes: Routes = [
  {
    path: '',
    component: WinxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinxPageRoutingModule {}
