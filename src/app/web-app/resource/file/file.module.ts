import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';

import { FileComponent } from './file.component';
import { FileService } from './file.service';
import { LoaderModule } from '../../../shared/components/loader/loader.module';
import { ConfirmDialogModule } from '../../../shared/components/confirm-dialog/confirm-dialog.module';
import { AddToCollModule } from '../../../shared/components/add-to-coll/add-to-coll.module';
import { ShareMailModule } from '../../../shared/components/share-mail/share-mail.module';
import { GetLinkModule } from '../../../shared/components/get-link/get-link.module';
import { SelItmFxdDivModule } from '../../../shared/components/sel-itm-fxd-div/sel-itm-fxd-div.module';

import { ContentWorkspaceService } from '../../../hub/content-workspace/content-workspace.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';


const routes: Routes = [
  { path: '', component: FileComponent }
];

@NgModule({
  declarations: [FileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatTooltipModule, MatSlideToggleModule, MatRadioModule,
    LoaderModule, ConfirmDialogModule,
    AddToCollModule, ShareMailModule, GetLinkModule, SelItmFxdDivModule
  ],
  providers: [FileService, ContentWorkspaceService, BreadcrumbService]
})
export class FileModule { }
