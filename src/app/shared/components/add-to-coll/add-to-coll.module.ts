import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCollComponent } from './add-to-coll.component';

import { LoaderModule } from '../loader/loader.module';
import { CollService } from '../../services/coll.service'

@NgModule({
  declarations: [AddToCollComponent],
  imports: [
    CommonModule,
    LoaderModule
  ],
  entryComponents: [
    AddToCollComponent
  ],
  providers: [CollService]
})
export class AddToCollModule { }
