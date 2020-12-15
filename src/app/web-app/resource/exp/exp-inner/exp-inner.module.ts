import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

import { ExpInnerComponent } from './exp-inner.component';
import { ExpService } from '../../exp/exp.service';
import { LoaderModule } from '../../../../shared/components/loader/loader.module';
import { AddToCollModule } from '../../../../shared/components/add-to-coll/add-to-coll.module';
import { ShareMailModule } from '../../../../shared/components/share-mail/share-mail.module';
import { GetLinkModule } from '../../../../shared/components/get-link/get-link.module';
import { BreadcrumbService } from '../../../../shared/services/breadcrumb.service';
import { ContentWorkspaceService } from 'src/app/hub/content-workspace/content-workspace.service';

const routes: Routes = [
  { path: '', component: ExpInnerComponent }
];

@NgModule({
  declarations: [ExpInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    LoaderModule,
    AddToCollModule, ShareMailModule, GetLinkModule
  ],
  providers: [ExpService, BreadcrumbService, ContentWorkspaceService]
})
export class ExpInnerModule { }
