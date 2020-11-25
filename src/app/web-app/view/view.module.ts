import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ViewComponent } from './view.component';
import { ContentWorkspaceService } from '../../hub/content-workspace/content-workspace.service';
import { LoaderModule } from '../../shared/components/loader/loader.module';

const routes: Routes = [
  { path: '', component: ViewComponent }
];

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    MatCheckboxModule,
    NgbTooltipModule
  ],
  providers: [ContentWorkspaceService]
})
export class ViewModule { }
