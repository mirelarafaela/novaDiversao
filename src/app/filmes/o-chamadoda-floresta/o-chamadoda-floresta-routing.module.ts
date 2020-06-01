import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OChamadodaFlorestaPage } from './o-chamadoda-floresta.page';

const routes: Routes = [
  {
    path: '',
    component: OChamadodaFlorestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OChamadodaFlorestaPageRoutingModule {}
