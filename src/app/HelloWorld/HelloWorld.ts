import {Component} from "@angular/core";

/**
 * A generic hello world component for demonstration purposes.
 */
@Component({
    selector: 'rr-helloworld',
    templateUrl: './HelloWorld.html'
})
export class HelloWorldComponent {
    constructor() {}

    /**
     * Get value by index
     *
     * @param index {Number} The index number to get value for
     */
    getValues(index: Number): Number {
        return index;
    }


}