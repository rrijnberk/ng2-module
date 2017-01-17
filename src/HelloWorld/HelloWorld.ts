import {Component} from "@angular/core";

/**
 * @Component HelloWorldComponent
 * @Module ComponentsModule
 *
 * @Description
 * A generic hello world component for demonstration purposes.
 *
 * @Example helloworld/default.sample
 * @Example helloworld/spiffy.sample
 */
@Component({
    selector: 'rr-helloworld',
    templateUrl: './HelloWorld.html'
})
export class HelloWorldComponent {
    constructor() {}

    /**
     * @Method getValues
     * @MethodOf HelloWorldComponent
     *
     * @Description
     * Just another method
     *
     * @param index
     */
    getValues(index: Number): Number {
        return index;
    }


}