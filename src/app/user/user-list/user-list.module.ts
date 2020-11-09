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
import { ClickOutsideModule } from 'ng-click-outside';

import { LoaderModule } from '../../shared/components/loader/loader.module';
import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule, RouterModule,
    FormsModule, ReactiveFormsModule,
    MatTabsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatCheckboxModule, MatRadioModule,
    DragDropModule,
    ClickOutsideModule,
    LoaderModule
  ],
  providers: [UserService],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
