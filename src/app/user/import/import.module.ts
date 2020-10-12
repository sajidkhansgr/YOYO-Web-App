import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FileProgessModule } from '../../shared/components/file-progess/file-progess.module';
import { CustomDirectiveModule } from '../../shared/directives/custom-directive.module';

import { ImportComponent } from './import.component';
const routes: Routes = [
  { path: '', component: ImportComponent }
];

@NgModule({
  declarations: [ImportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    MatFormFieldModule,
    FileProgessModule,
    CustomDirectiveModule
  ]
})
export class ImportModule { }
