"use strict";
var core_1 = require("@angular/core");
var DocSampleComponent = (function () {
    function DocSampleComponent(element) {
        console.log(element);
    }
    DocSampleComponent = __decorate([
        core_1.Component({
            selector: 'doc-sample',
            template: '<code><ng-content></ng-content></code>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DocSampleComponent);
    return DocSampleComponent;
}());
exports.DocSampleComponent = DocSampleComponent;
//# sourceMappingURL=doc-sample.component.js.map