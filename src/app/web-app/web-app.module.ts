import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebAppComponent } from './web-app.component';
import { ChngPassModule } from '../shared/components/chng-pass/chng-pass.module';

const routes: Routes = [
  {
      path        : '', component: WebAppComponent,
      children    : [
        { path : 'resource', loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule) },
        { path : 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
        { path : 'personal-settings', loadChildren: () => import('./prsnl-sett/prsnl-sett.module').then(m => m.PrsnlSettModule) }
      ]
  }
];

@NgModule({
  declarations: [WebAppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChngPassModule
  ]
})
export class WebAppModule { }
