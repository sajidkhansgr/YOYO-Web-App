import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TagsComponent } from './tags.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    TagsComponent
  ]
})
export class TagsModule { }
