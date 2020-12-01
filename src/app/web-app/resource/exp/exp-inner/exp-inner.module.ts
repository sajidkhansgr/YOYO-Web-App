import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

import { ExpInnerComponent } from './exp-inner.component';
import { ExpService } from '../../exp/exp.service';

const routes: Routes = [
  { path: '', component: ExpInnerComponent }
];

@NgModule({
  declarations: [ExpInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [ ExpService ]
})
export class ExpInnerModule { }
