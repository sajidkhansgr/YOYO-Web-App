import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginCheckGuard } from '../shared/guard/login-check.guard';

const routes: Routes = [
  {
    path : '',
    children : [
      { path : '', pathMatch: 'full', redirectTo: 'login' },
      { path : 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate:[LoginCheckGuard] },
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ LoginCheckGuard ]
})
export class AuthModule { }
