import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContentWorkspaceModule } from './content-workspace/content-workspace.module';
import { TagsModule } from './tags/tags.module';
import { FileProgessModule } from '../shared/components/file-progess/file-progess.module';
import { CustomDirectiveModule } from '../shared/directives/custom-directive.module';

import { HubComponent } from './hub.component';
const routes: Routes = [
  { path: '', component: HubComponent }
];

@NgModule({
  declarations: [HubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    ContentWorkspaceModule,
    TagsModule,
    FileProgessModule,
    CustomDirectiveModule
  ]
})
export class HubModule { }
