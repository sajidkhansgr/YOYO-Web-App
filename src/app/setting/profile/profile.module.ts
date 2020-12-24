import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LoaderModule } from '../../shared/components/loader/loader.module';
import { ChngPassModule } from '../../shared/components/chng-pass/chng-pass.module';
import { ProfileComponent } from './profile.component';
import { UserService } from '../../user/user.service';
import { TokenDataService } from '../../shared/services/token-data.service';
import { ProfileService } from './profile.service';

const routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatTooltipModule,
    LoaderModule, ChngPassModule
  ],
  exports: [ProfileComponent],
  providers: [UserService, TokenDataService, ProfileService]
})
export class ProfileModule { }
