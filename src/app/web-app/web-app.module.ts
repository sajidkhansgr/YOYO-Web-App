import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebAppComponent } from './web-app.component';

const routes: Routes = [
  {
      path        : '', component: WebAppComponent,
      children    : [
        { path : 'collections', loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule) },
        { path : 'experience', loadChildren: () => import('./exp/exp.module').then(m => m.ExpModule) },
        { path : 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
        { path : 'my-files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
        { path : 'change-password', loadChildren: () => import('./chng-pass/chng-pass.module').then(m => m.ChngPassModule) },
        { path : 'personal-settings', loadChildren: () => import('./prsnl-sett/prsnl-sett.module').then(m => m.PrsnlSettModule) }
      ]
  }
];

@NgModule({
  declarations: [WebAppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WebAppModule { }
