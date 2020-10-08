import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDndDirective } from './file-dnd.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations:[FileDndDirective],
  exports: [
    FileDndDirective
  ]
})

export class CustomDirectiveModule {
  static forRoot() {
      return {
          ngModule: CustomDirectiveModule,
          providers: [],
      };
   }
}
