import {Component, ElementRef} from "@angular/core";

@Component({
    selector: 'doc-sample',
    template: '<code><ng-content></ng-content></code>'
})
export class DocSampleComponent {


    constructor(element: ElementRef) {
        console.log(element);
    }
}