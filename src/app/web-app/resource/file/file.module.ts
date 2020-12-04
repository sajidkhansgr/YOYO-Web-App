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
import { ContentWorkspaceService } from '../../../hub/content-workspace/content-workspace.service';
import { LoaderModule } from '../../../shared/components/loader/loader.module';
import { AddToCollModule } from '../../../shared/components/add-to-coll/add-to-coll.module';
import { ShareMailModule } from '../../../shared/components/share-mail/share-mail.module';
import { GetLinkModule } from '../../../shared/components/get-link/get-link.module';

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
    LoaderModule,
    AddToCollModule, ShareMailModule, GetLinkModule
  ],
  providers: [FileService, ContentWorkspaceService]
})
export class FileModule { }
