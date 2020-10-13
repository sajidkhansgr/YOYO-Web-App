import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SettingComponent } from './setting.component';
import { DivisionModule } from './division/division.module';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'divisions/list',
    pathMatch: 'full'
  },
  {
    path: '', component: SettingComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), data: { type: 0 }
      },
      {
        path: 'divisions/list',
        loadChildren: () => import('./division/division.module').then(m => m.DivisionModule), data: { type: 1 }
      }
    ]
  }
];

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    ProfileModule,
    DivisionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class SettingModule { }
