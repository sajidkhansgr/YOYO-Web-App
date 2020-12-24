import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { QuillModule } from 'ngx-quill';

import { ShareMailComponent } from './share-mail.component';
import { ShareMailService } from './share-mail.service';
import { ShareService } from '../../../web-app/share/share.service';
import { LoaderModule } from '../loader/loader.module';
import { CollectionService } from 'src/app/web-app/resource/collection/collection.service';

@NgModule({
  declarations: [ShareMailComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatChipsModule, // not working here, so added in app-module
    LoaderModule,
    QuillModule.forRoot()
  ],
  entryComponents: [
    ShareMailComponent
  ],
  providers: [ShareMailService, ShareService, CollectionService]
})
export class ShareMailModule { }
