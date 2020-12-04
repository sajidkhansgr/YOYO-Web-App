import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CollComponent } from './coll.component';
import { LoaderModule } from '../loader/loader.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollectionService } from '../../../web-app/resource/collection/collection.service';



@NgModule({
  declarations: [CollComponent],
  imports: [
    CommonModule,
    LoaderModule,
    MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule
  ],
  entryComponents: [
    CollComponent
  ],
  providers: [CollectionService]
})
export class CollModule { }
