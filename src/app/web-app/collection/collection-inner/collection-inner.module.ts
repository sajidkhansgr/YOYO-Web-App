import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule, MatSlideToggle } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';

import { CollectionInnerComponent } from './collection-inner.component';

const routes: Routes = [
  { path: '', component: CollectionInnerComponent }
];

@NgModule({
  declarations: [CollectionInnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule
  ]
})
export class CollectionInnerModule { }
