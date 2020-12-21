import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ForgotPasswordComponent } from './forgot-password.component';
import { LoaderModule } from '../../shared/components/loader/loader.module';
import { AuthSlidesModule } from '../../shared/components/auth-slides/auth-slides.module';
import { AuthService } from '../auth.service';

const routes: Routes = [
  { path: '', component: ForgotPasswordComponent }
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LoaderModule, AuthSlidesModule
  ],
  providers: [AuthService]
})
export class ForgotPasswordModule { }
