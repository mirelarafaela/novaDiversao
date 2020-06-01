import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreysAnatomyPage } from './greys-anatomy.page';

const routes: Routes = [
  {
    path: '',
    component: GreysAnatomyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreysAnatomyPageRoutingModule {}
