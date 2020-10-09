import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClickOutsideModule } from 'ng-click-outside';
import { MatSelectModule } from '@angular/material/select';

import { UserListModule } from './user-list/user-list.module';
import { GroupModule } from './group/group.module';
import { UserComponent } from './user.component';
const routes: Routes = [
  { path: '', component: UserComponent }
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    // DragDropModule,
    ClickOutsideModule,
    MatSelectModule,
    UserListModule,
    GroupModule
  ]
})
export class UserModule { }
