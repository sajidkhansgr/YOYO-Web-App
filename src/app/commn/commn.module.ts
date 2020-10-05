import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommnComponent } from './commn.component';
const routes: Routes = [
  { path: '', component: CommnComponent }
];
@NgModule({
  declarations: [CommnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CommnModule { }
