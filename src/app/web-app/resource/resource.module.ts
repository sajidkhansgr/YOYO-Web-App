import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './resource.component';

const routes: Routes = [
  {
      path        : '', component: ResourceComponent,
      children    : [
        { path : 'collections', loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule) },
        { path : 'experiences', loadChildren: () => import('./exp/exp.module').then(m => m.ExpModule) },
        { path : 'my-files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) }
      ]
  }
];

@NgModule({
  declarations: [ResourceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ResourceModule { }
