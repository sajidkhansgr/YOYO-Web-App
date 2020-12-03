import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetLinkComponent } from './get-link.component';
import { LoaderModule } from '../../components/loader/loader.module';

@NgModule({
  declarations: [GetLinkComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    GetLinkComponent
  ],
  providers: []
})
export class GetLinkModule { }
