import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { FileProgessModule } from '../../shared/components/file-progess/file-progess.module';
import { LoaderModule } from '../../shared/components/loader/loader.module';

import { ContentWorkspaceComponent } from './content-workspace.component';
import { ContentWorkspaceService } from './content-workspace.service'

@NgModule({
  declarations: [ContentWorkspaceComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatTabsModule, MatSelectModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    FileProgessModule,
    LoaderModule,
    FormsModule, ReactiveFormsModule,
    NgbCollapseModule,
    ClickOutsideModule
  ],
  exports: [
    ContentWorkspaceComponent
  ],
  providers: [ContentWorkspaceService],
})
export class ContentWorkspaceModule { }
