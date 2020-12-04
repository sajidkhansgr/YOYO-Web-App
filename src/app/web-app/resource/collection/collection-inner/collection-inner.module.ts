import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { CollectionInnerComponent } from './collection-inner.component';
import { LoaderModule } from '../../../../shared/components/loader/loader.module';
import { CollectionService } from '../collection.service';
import { FileService } from '../../file/file.service';
import { ExpService } from '../../exp/exp.service';
import { ContentWorkspaceService } from '../../../../hub/content-workspace/content-workspace.service';
import { AddToCollModule } from '../../../../shared/components/add-to-coll/add-to-coll.module';
import { ShareMailModule } from '../../../../shared/components/share-mail/share-mail.module';
import { GetLinkModule } from '../../../../shared/components/get-link/get-link.module';


const routes: Routes = [
  { path: '', component: CollectionInnerComponent }
];

@NgModule({
  declarations: [CollectionInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
    LoaderModule,
    FormsModule, ReactiveFormsModule,
    MatDialogModule,
    AddToCollModule, ShareMailModule, GetLinkModule
  ],
  providers: [CollectionService, ExpService, FileService, ContentWorkspaceService]
})
export class CollectionInnerModule { }
