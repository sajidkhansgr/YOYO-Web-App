import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CollComponent } from './coll.component';
import { LoaderModule } from '../loader/loader.module';
import { CollService } from './coll.service'

@NgModule({
  declarations: [CollComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
    LoaderModule
  ],
  entryComponents: [
    CollComponent
  ],
  providers: [CollService]
})
export class CollModule { }
