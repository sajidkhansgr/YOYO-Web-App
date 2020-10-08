import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TagsComponent } from './tags.component';

@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule
  ],
  exports: [
    TagsComponent
  ]
})
export class TagsModule { }
