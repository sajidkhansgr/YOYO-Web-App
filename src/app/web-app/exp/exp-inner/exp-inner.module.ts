import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpInnerComponent } from './exp-inner.component';

const routes: Routes = [
  { path: '', component: ExpInnerComponent }
];

@NgModule({
  declarations: [ExpInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExpInnerModule { }
