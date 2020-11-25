import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpListComponent } from './exp-list.component';

import { ExpService } from '../exp.service';
import { LoaderModule } from '../../../../shared/components/loader/loader.module';

const routes: Routes = [
  { path: '', component: ExpListComponent }
];

@NgModule({
  declarations: [ExpListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule
  ],
  providers: [ExpService]
})
export class ExpListModule { }
