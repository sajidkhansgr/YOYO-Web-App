import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HubComponent } from './hub.component';
const routes: Routes = [
  { path: '', component: HubComponent }
];

@NgModule({
  declarations: [HubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class HubModule { }
