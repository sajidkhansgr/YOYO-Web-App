import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShareLinkComponent } from './share-link.component';

const routes: Routes = [
  { path: '', component: ShareLinkComponent }
];

@NgModule({
  declarations: [ShareLinkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShareLinkModule { }
