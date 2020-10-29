import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ConfirmDialogModule } from '../../shared/components/confirm-dialog/confirm-dialog.module';
import { LoaderModule } from '../../shared/components/loader/loader.module';
import { GroupComponent } from './group.component';
import { GroupService } from './group.service';

@NgModule({
  declarations: [GroupComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ClickOutsideModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSelectModule, MatProgressSpinnerModule,
    MatChipsModule, MatAutocompleteModule,
    ConfirmDialogModule, LoaderModule
  ],
  exports: [
    GroupComponent
  ],
  providers: [GroupService]
})
export class GroupModule { }
