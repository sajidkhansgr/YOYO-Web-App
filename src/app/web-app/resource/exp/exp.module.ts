import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { ExpComponent } from './exp.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./exp-list/exp-list.module').then(m => m.ExpListModule)
      },
      {
        path: ':expid',
        loadChildren: () => import('./exp-inner/exp-inner.module').then(m => m.ExpInnerModule)
      },
      {
        path: ':expid/folder/:fldrid',
        loadChildren: () => import('./exp-inner/exp-inner.module').then(m => m.ExpInnerModule)
      },
      // {
      //   path: ':expid/smart-folder/:smtFldrid',
      //   loadChildren: () => import('./exp-inner/exp-inner.module').then(m => m.ExpInnerModule)
      // }
    ]
  }
];

@NgModule({
  declarations: [], //ExpComponent
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExpModule { }
