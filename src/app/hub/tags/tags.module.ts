import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { LoaderModule } from '../../shared/components/loader/loader.module';
import { ConfirmDialogModule } from '../../shared/components/confirm-dialog/confirm-dialog.module';
import { TagsComponent } from './tags.component';
import { TagsService } from './tags.service';
import { TableModule } from '../../shared/components/table/table.module'

@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ConfirmDialogModule,
    MatCheckboxModule,
    LoaderModule, TableModule,
    MatChipsModule
  ],
  exports: [
    TagsComponent
  ],
  providers: [TagsService]
})
export class TagsModule { }
