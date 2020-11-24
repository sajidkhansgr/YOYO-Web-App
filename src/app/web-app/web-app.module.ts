import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WebAppComponent } from './web-app.component';
import { HeaderModule } from './header/header.module';

const routes: Routes = [
  {
      path        : '', component: WebAppComponent,
      children    : [
        { path : '', pathMatch: 'full', redirectTo: 'resource' },
        { path : 'resource', loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule) },
        { path : 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
        { path : 'personal-settings', loadChildren: () => import('./prsnl-sett/prsnl-sett.module').then(m => m.PrsnlSettModule) },
        { path : 'view/:id', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) }
      ]
  }
];

@NgModule({
  declarations: [WebAppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ]
})
export class WebAppModule { }
