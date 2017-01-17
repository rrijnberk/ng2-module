"use strict";
var core_1 = require("@angular/core");
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
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    /**
     * @Method getValues
     * @MethodOf HelloWorldComponent
     *
     * @Description
     * Just another method
     *
     * @param index
     */
    HelloWorldComponent.prototype.getValues = function (index) {
        return index;
    };
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: 'rr-helloworld',
            templateUrl: './HelloWorld.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;
//# sourceMappingURL=HelloWorld.js.map