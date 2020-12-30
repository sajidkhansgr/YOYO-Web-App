import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

import { CollectionInnerComponent } from './collection-inner.component';
import { LoaderModule } from '../../../../shared/components/loader/loader.module';
import { CollectionService } from '../collection.service';
import { AddToCollModule } from '../../../../shared/components/add-to-coll/add-to-coll.module';
import { ShareMailModule } from '../../../../shared/components/share-mail/share-mail.module';
import { GetLinkModule } from '../../../../shared/components/get-link/get-link.module';
import { SelItmFxdDivModule } from '../../../../shared/components/sel-itm-fxd-div/sel-itm-fxd-div.module';
import { AddRsrcModule } from '../../../../shared/components/add-rsrc/add-rsrc.module';

import { DragulaModule } from 'ng2-dragula';

const routes: Routes = [
  { path: '', component: CollectionInnerComponent }
];

@NgModule({
  declarations: [CollectionInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatDialogModule, MatChipsModule,
    LoaderModule,
    AddToCollModule, ShareMailModule, GetLinkModule, SelItmFxdDivModule, AddRsrcModule,
    DragulaModule.forRoot()
  ],
  providers: [CollectionService]
})
export class CollectionInnerModule { }
