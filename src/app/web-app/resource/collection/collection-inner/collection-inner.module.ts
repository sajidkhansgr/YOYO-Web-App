import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
import { SelItmFxdDivModule } from '../../../../shared/components/sel-itm-fxd-div/sel-itm-fxd-div.module';

const routes: Routes = [
  { path: '', component: CollectionInnerComponent }
];

@NgModule({
  declarations: [CollectionInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatCheckboxModule,
    LoaderModule,
    MatDialogModule,
    AddToCollModule, ShareMailModule, GetLinkModule, SelItmFxdDivModule
  ],
  providers: [CollectionService, ExpService, FileService, ContentWorkspaceService]
})
export class CollectionInnerModule { }
