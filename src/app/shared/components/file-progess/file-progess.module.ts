import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileProgessComponent } from './file-progess.component';

@NgModule({
  declarations: [FileProgessComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FileProgessComponent
  ]
})
export class FileProgessModule { }
