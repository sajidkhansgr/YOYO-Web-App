import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { ContentWorkspaceModule } from './content-workspace/content-workspace.module';
import { TagsModule } from './tags/tags.module';
import { CustomDirectiveModule } from '../shared/directives/custom-directive.module';
import { HubService } from './hub.service';
import { LoaderModule } from '../shared/components/loader/loader.module';

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
    ContentWorkspaceModule,
    TagsModule,
    CustomDirectiveModule,
    LoaderModule
  ],
  providers: [HubService]
})
export class HubModule { }
