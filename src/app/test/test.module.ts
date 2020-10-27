import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { AnnotService } from './annot.service';

const routes: Routes = [
  { path: '', component: TestComponent }
];
@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [ AnnotService ]
})
export class TestModule { }
