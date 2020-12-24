import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

import { AuthSlidesComponent } from './auth-slides.component';

@NgModule({
  declarations: [AuthSlidesComponent],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [
    AuthSlidesComponent
  ]
})
export class AuthSlidesModule { }
