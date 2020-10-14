import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './exp.component';

const routes: Routes = [
  { path: '', component: ExpComponent }
];

@NgModule({
  declarations: [ExpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExpModule { }
