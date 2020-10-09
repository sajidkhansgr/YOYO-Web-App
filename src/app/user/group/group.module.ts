import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClickOutsideModule } from 'ng-click-outside';
import { MatSelectModule } from '@angular/material/select';
import { GroupComponent } from './group.component';

@NgModule({
  declarations: [GroupComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSelectModule,
    ClickOutsideModule
  ],
  exports: [
    GroupComponent
  ]
})
export class GroupModule { }
