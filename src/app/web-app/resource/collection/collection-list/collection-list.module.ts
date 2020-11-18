import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CollectionListComponent } from './collection-list.component';

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
    MatTooltipModule
  ]
})
export class CollectionListModule { }
