import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AddRsrcComponent } from './add-rsrc.component';
import { LoaderModule } from '../loader/loader.module';
import { ContentWorkspaceService } from 'src/app/hub/content-workspace/content-workspace.service';
import { FileService } from 'src/app/web-app/resource/file/file.service';
import { ExpService } from '../../../web-app/resource/exp/exp.service';
import { CollectionService } from 'src/app/web-app/resource/collection/collection.service';



@NgModule({
  declarations: [AddRsrcComponent],
  imports: [
    CommonModule,
    LoaderModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule
  ],
  entryComponents: [
    AddRsrcComponent
  ],
  providers: [CollectionService, ExpService, FileService, ContentWorkspaceService]
})
export class AddRsrcModule { }
