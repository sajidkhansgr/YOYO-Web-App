import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ShareMailComponent } from './share-mail.component';
import { ShareMailService } from './share-mail.service';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [ShareMailComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule,
    LoaderModule
  ],
  entryComponents: [
    ShareMailComponent
  ],
  providers: [ShareMailService]
})
export class ShareMailModule { }
