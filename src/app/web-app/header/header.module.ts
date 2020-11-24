import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ChngPassModule } from '../../shared/components/chng-pass/chng-pass.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ChngPassModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
