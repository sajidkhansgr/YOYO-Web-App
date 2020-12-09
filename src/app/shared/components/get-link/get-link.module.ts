import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { GetLinkComponent } from './get-link.component';
import { CollectionService } from 'src/app/web-app/resource/collection/collection.service';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [GetLinkComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule,
    LoaderModule,
    FormsModule, ReactiveFormsModule
  ],
  entryComponents: [
    GetLinkComponent
  ],
  providers: [CollectionService]
})
export class GetLinkModule { }
