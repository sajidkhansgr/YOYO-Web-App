import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DivisionComponent } from './division.component';

const routes = [
    { path: '', component: DivisionComponent}
];

console.log("division")
@NgModule({
  declarations: [DivisionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [DivisionComponent]
})
export class DivisionModule { }
