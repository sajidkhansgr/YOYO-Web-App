import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderModule } from '../shared/components/loader/loader.module';
import { CommnComponent } from './commn.component';
import { CommnService } from './commn.service'

const routes: Routes = [
  { path: '', component: CommnComponent }
];
@NgModule({
  declarations: [CommnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatTabsModule,
    NgbModule, LoaderModule
  ],
  providers: [CommnService]
})
export class CommnModule { }
