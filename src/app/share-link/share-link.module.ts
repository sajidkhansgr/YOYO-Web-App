import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule
import { ShareLinkComponent } from './share-link.component';
import { ShareLinkService } from './share-link.service';
import { LoaderModule } from '../shared/components/loader/loader.module';

const routes: Routes = [
  { path: '', component: ShareLinkComponent }
];

@NgModule({
  declarations: [ShareLinkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    PdfViewerModule
  ],
  providers: [ShareLinkService]
})
export class ShareLinkModule { }
