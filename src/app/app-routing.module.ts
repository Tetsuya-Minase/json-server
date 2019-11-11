import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './page/top/component/top.component';

const routes: Routes = [
  {path: 'list', loadChildren: () => import('./page/list/list.module').then(m => m.ListModule)},
  {path: '', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
