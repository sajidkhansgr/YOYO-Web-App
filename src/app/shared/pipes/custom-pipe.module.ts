import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterNamePipe } from './filter-name.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations:[FilterNamePipe],
  exports: [
    FilterNamePipe
  ]
})

export class CustomPipeModule {
  static forRoot() {
      return {
          ngModule: CustomPipeModule,
          providers: [],
      };
   }
}
