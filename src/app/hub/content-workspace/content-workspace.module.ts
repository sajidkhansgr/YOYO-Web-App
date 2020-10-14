import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FileProgessModule } from '../../shared/components/file-progess/file-progess.module';

import { ContentWorkspaceComponent } from './content-workspace.component';
import { HubService } from '../hub.service';

@NgModule({
  declarations: [ContentWorkspaceComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatTabsModule, MatSelectModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    FileProgessModule
  ],
  exports: [
    ContentWorkspaceComponent
  ],
  providers: [HubService],
})
export class ContentWorkspaceModule { }
