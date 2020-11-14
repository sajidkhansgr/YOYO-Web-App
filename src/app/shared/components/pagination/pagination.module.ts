import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { PaginationComponent } from './pagination.component';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
