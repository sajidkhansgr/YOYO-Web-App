import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSlidesComponent } from './auth-slides.component';

@NgModule({
  declarations: [AuthSlidesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AuthSlidesComponent
  ]
})
export class AuthSlidesModule { }
