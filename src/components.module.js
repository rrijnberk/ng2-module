"use strict";
var core_1 = require('@angular/core');
var HelloWorld_1 = require('./HelloWorld/HelloWorld');
var alternative_components_1 = require('@rrijnberk/alternative-components');
var components = [
    HelloWorld_1.HelloWorldComponent
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [alternative_components_1.AlternativeComponentsModule],
            exports: components.slice(),
            declarations: components.slice(),
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map