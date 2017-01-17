"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var components_module_1 = require('../../src/components.module');
var docs_component_1 = require('./docs.component');
var doc_sample_component_1 = require('./support/doc-sample.component');
var default_sample_1 = require('./HelloWorld/default.sample');
var spiffy_sample_1 = require('./HelloWorld/spiffy.sample');
var docs_routing_1 = require('./docs.routing');
var samples = [
    default_sample_1.HelloWorldComponent_Sample,
    spiffy_sample_1.HelloWorldComponent_Sample_Spiffy
];
var DocsModule = (function () {
    function DocsModule() {
    }
    DocsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                components_module_1.ComponentsModule,
                docs_routing_1.routing
            ],
            declarations: [
                docs_component_1.DocumentApp,
                doc_sample_component_1.DocSampleComponent
            ].concat(samples),
            bootstrap: [docs_component_1.DocumentApp]
        }), 
        __metadata('design:paramtypes', [])
    ], DocsModule);
    return DocsModule;
}());
exports.DocsModule = DocsModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(DocsModule);
//# sourceMappingURL=docs.module.js.map