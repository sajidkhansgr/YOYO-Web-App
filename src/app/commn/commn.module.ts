import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderModule } from '../shared/components/loader/loader.module';
import { CommnComponent } from './commn.component';
import { CommnService } from './commn.service';
import { GroupService } from '../user/group/group.service';
import { ContentWorkspaceService } from '../hub/content-workspace/content-workspace.service';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { CustomPipeModule } from '../shared/pipes/custom-pipe.module';

const routes: Routes = [
  { path: '', component: CommnComponent }
];
@NgModule({
  declarations: [CommnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatTabsModule,
    MatChipsModule, MatAutocompleteModule,
    NgbModule, LoaderModule, PaginationModule,
    CustomPipeModule
  ],
  providers: [CommnService, GroupService, ContentWorkspaceService]
})
export class CommnModule { }
