import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ChngPassComponent } from './chng-pass.component';
import { PasswordService } from '../../shared/services/password.service';
import { LoaderModule } from '../../shared/components/loader/loader.module';

const routes: Routes = [
  { path: '', component: ChngPassComponent }
];

@NgModule({
  declarations: [ChngPassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    LoaderModule
  ],
  providers: [PasswordService]
})
export class ChngPassModule { }
