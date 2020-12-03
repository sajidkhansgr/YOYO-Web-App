import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { GetLinkComponent } from './get-link.component';

@NgModule({
  declarations: [GetLinkComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule
  ],
  entryComponents: [
    GetLinkComponent
  ],
  providers: []
})
export class GetLinkModule { }
