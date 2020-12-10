import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { CollectionListComponent } from './collection-list.component';
import { CollectionService } from '../collection.service'
import { LoaderModule } from '../../../../shared/components/loader/loader.module';
import { ShareMailModule } from '../../../../shared/components/share-mail/share-mail.module';
import { GetLinkModule } from '../../../../shared/components/get-link/get-link.module';
import { CollModule } from '../../../../shared/components/coll/coll.module';
import { SelItmFxdDivModule } from '../../../../shared/components/sel-itm-fxd-div/sel-itm-fxd-div.module';

const routes: Routes = [
  { path: '', component: CollectionListComponent }
];

@NgModule({
  declarations: [CollectionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    MatTooltipModule,
    LoaderModule,
    MatDialogModule,
    NgbNavModule,
    ShareMailModule, GetLinkModule, CollModule, SelItmFxdDivModule
  ],
  providers: [CollectionService],
})
export class CollectionListModule { }
