import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LoaderModule } from '../../components/loader/loader.module';
import { PasswordService } from '../../services/password.service';
import { ChngPassComponent } from './chng-pass.component';

@NgModule({
  declarations: [ChngPassComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatTooltipModule,
    LoaderModule
  ],
  entryComponents: [
    ChngPassComponent
  ],
  providers: [PasswordService]
})
export class ChngPassModule { }
