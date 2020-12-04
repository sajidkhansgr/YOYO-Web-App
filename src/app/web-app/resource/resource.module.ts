import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { ResourceComponent } from './resource.component';

const routes: Routes = [
  {
    path: '', component: ResourceComponent,
    children: [
      { path : '', pathMatch: 'full', redirectTo: 'experiences' },
      { path: 'experiences', loadChildren: () => import('./exp/exp.module').then(m => m.ExpModule) },
      { path: 'collections', loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule) },
      { path: 'my-files', loadChildren: () => import('./file/file.module').then(m => m.FileModule) },
      { path: 'my-files/:fldrid', loadChildren: () => import('./file/file.module').then(m => m.FileModule) }
    ]
  }
];

@NgModule({
  declarations: [ResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ]
})
export class ResourceModule { }
