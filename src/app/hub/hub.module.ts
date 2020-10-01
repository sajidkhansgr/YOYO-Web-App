import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HubComponent } from './hub.component';
const routes: Routes = [
  { path : '', component: HubComponent }
];
@NgModule({
  declarations: [HubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HubModule { }
