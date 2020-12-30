import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component';
import { HubService } from '../../hub/hub.service';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarComponent],
  providers: [HubService]
})
export class SidebarModule { }
