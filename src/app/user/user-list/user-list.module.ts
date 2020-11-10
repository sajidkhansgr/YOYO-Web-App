import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClickOutsideModule } from 'ng-click-outside';

import { LoaderModule } from '../../shared/components/loader/loader.module';
import { ConfirmDialogModule } from '../../shared/components/confirm-dialog/confirm-dialog.module';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { GroupService } from '../group/group.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule, RouterModule,
    FormsModule, ReactiveFormsModule,
    MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatCheckboxModule, MatRadioModule, MatChipsModule, MatAutocompleteModule,
    DragDropModule,
    ClickOutsideModule,
    LoaderModule, ConfirmDialogModule
  ],
  providers: [UserService, GroupService],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
