import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table.component';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    LoaderModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
