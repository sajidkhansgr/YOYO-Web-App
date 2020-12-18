import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { DivisionComponent } from './division.component';
import { DivisionService } from './division.service';
import { HubService } from '../../hub/hub.service';
import { LoaderModule } from '../../shared/components/loader/loader.module';
import { ConfirmDialogModule } from '../../shared/components/confirm-dialog/confirm-dialog.module';

const routes = [
  { path: '', component: DivisionComponent }
];

@NgModule({
  declarations: [DivisionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    MatProgressSpinnerModule, MatFormFieldModule,
    MatInputModule, MatCheckboxModule, MatSelectModule,
    LoaderModule, ConfirmDialogModule
  ],
  providers: [DivisionService, HubService],
  exports: [DivisionComponent]
})
export class DivisionModule { }
