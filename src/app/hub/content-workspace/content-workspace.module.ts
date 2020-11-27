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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbCollapseModule, NgbDropdownModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FileProgessModule } from '../../shared/components/file-progess/file-progess.module';
import { LoaderModule } from '../../shared/components/loader/loader.module';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';

import { ContentWorkspaceComponent } from './content-workspace.component';
import { ContentWorkspaceService } from './content-workspace.service';
import { TagsService } from '../tags/tags.service';
import { LanguageService } from '../../shared/services/language.service';
import { FileService } from '../../shared/services/file.service';
import { CustomPipeModule } from '../../shared/pipes/custom-pipe.module';

@NgModule({
  declarations: [ContentWorkspaceComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatTabsModule, MatSelectModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule, MatChipsModule, MatAutocompleteModule,
    FileProgessModule, LoaderModule, PaginationModule,
    FormsModule, ReactiveFormsModule,
    NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbTypeaheadModule,
    DragDropModule,
    CustomPipeModule
  ],
  exports: [
    ContentWorkspaceComponent
  ],
  providers: [ContentWorkspaceService, TagsService, LanguageService, FileService],
})
export class ContentWorkspaceModule { }
