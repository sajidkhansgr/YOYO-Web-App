import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrsnlSettComponent } from './prsnl-sett.component';

const routes: Routes = [
  { path: '', component: PrsnlSettComponent }
];

@NgModule({
  declarations: [PrsnlSettComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrsnlSettModule { }
