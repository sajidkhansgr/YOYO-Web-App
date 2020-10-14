import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { ClickOutsideModule } from 'ng-click-outside';
import { UserListComponent } from './user-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule, RouterModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    ClickOutsideModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
