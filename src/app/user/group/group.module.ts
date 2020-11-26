import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { GroupComponent } from './group.component';
import { GroupService } from './group.service';
import { ConfirmDialogModule } from '../../shared/components/confirm-dialog/confirm-dialog.module';
import { LoaderModule } from '../../shared/components/loader/loader.module';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';
import { CustomPipeModule } from '../../shared/pipes/custom-pipe.module';

@NgModule({
  declarations: [GroupComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSelectModule,
    MatChipsModule, MatAutocompleteModule,
    ConfirmDialogModule, LoaderModule,
    PaginationModule, CustomPipeModule
  ],
  exports: [
    GroupComponent
  ],
  providers: [GroupService]
})
export class GroupModule { }
