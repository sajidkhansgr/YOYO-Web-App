import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'error-404',
    templateUrl: './error-404.component.html',
    styleUrls: ['./error-404.component.scss'],
    host: {
        class: 'w-100'
    }
})
export class Error404Component {
    constructor() { }
}
