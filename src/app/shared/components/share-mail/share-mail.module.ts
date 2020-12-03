import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ShareMailComponent } from './share-mail.component';

@NgModule({
  declarations: [ShareMailComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule
  ],
  entryComponents: [
    ShareMailComponent
  ],
  providers: []
})
export class ShareMailModule { }
