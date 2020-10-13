import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ContentWorkspaceComponent } from './content-workspace.component';
import { HubService } from '../hub.service';

@NgModule({
  declarations: [ContentWorkspaceComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatTabsModule, MatSelectModule
  ],
  exports: [
    ContentWorkspaceComponent
  ],
  providers: [HubService],
})
export class ContentWorkspaceModule { }
