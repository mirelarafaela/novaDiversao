import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmeacaProfundaPage } from './ameaca-profunda.page';

const routes: Routes = [
  {
    path: '',
    component: AmeacaProfundaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmeacaProfundaPageRoutingModule {}
