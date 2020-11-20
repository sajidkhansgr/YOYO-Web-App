import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { CollectionListComponent } from './collection-list.component';
import { CollectionService } from '../collection.service'
import { LoaderModule } from '../../../../shared/components/loader/loader.module';

const routes: Routes = [
  { path: '', component: CollectionListComponent }
];


@NgModule({
  declarations: [CollectionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    LoaderModule,
    FormsModule, ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [CollectionService],
})
export class CollectionListModule { }