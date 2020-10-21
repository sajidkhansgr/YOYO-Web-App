import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectionInnerComponent } from './collection-inner.component';

const routes: Routes = [
  { path: '', component: CollectionInnerComponent }
];

@NgModule({
  declarations: [CollectionInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollectionInnerModule { }
