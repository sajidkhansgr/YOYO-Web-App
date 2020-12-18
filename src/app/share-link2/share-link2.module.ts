import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShareLink2Component } from './share-link2.component';

const routes: Routes = [
  { path: '', component: ShareLink2Component }
];

@NgModule({
  declarations: [ShareLink2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ShareLink2Module { }
