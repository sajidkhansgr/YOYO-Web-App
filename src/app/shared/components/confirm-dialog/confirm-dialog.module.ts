import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    declarations: [
        ConfirmDialogComponent
    ],
    imports: [
        MatDialogModule
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
})
export class ConfirmDialogModule {
}
