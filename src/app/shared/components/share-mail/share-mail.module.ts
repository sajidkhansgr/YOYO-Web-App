import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareMailComponent } from './share-mail.component';
import { LoaderModule } from '../../components/loader/loader.module';

@NgModule({
  declarations: [ShareMailComponent],
  imports: [
    CommonModule,
    LoaderModule
  ],
  entryComponents: [
    ShareMailComponent
  ],
  providers: []
})
export class ShareMailModule { }
