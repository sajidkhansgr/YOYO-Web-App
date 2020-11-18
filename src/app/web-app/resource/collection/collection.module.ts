import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { CollectionComponent } from './collection.component';

// const routes: Routes = [
//   { path: '', component: CollectionComponent }
// ];

const routes: Routes = [
  {
      path        : '',
      children    : [
        {
            path        : '',
            loadChildren: () => import('./collection-list/collection-list.module').then(m => m.CollectionListModule)
        },
        {
            path        : ':cid',
            loadChildren: () => import('./collection-inner/collection-inner.module').then(m => m.CollectionInnerModule)
        }
      ]
  }
];


@NgModule({
  declarations: [], //CollectionComponent
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollectionModule { }
