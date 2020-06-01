import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'o-chamadoda-floresta',
    loadChildren: () => import('./filmes/o-chamadoda-floresta/o-chamadoda-floresta.module').then( m => m.OChamadodaFlorestaPageModule)
  },
  {
    path: 'ameaca-profunda',
    loadChildren: () => import('./filmes/ameaca-profunda/ameaca-profunda.module').then( m => m.AmeacaProfundaPageModule)
  },
  {
    path: 'riverdale',
    loadChildren: () => import('./series/riverdale/riverdale.module').then( m => m.RiverdalePageModule)
  },
  {
    path: 'ursinhos-carinhosos',
    loadChildren: () => import('./desenhos/ursinhos-carinhosos/ursinhos-carinhosos.module').then( m => m.UrsinhosCarinhososPageModule)
  },
  {
    path: 'winx',
    loadChildren: () => import('./desenhos/winx/winx.module').then( m => m.WinxPageModule)
  },
  {
    path: 'greys-anatomy',
    loadChildren: () => import('./series/greys-anatomy/greys-anatomy.module').then( m => m.GreysAnatomyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
