"use strict";
var router_1 = require('@angular/router');
var default_sample_1 = require('./HelloWorld/default.sample');
var spiffy_sample_1 = require('./HelloWorld/spiffy.sample');
var routes = [
    { path: 'helloworld/default.sample', component: default_sample_1.HelloWorldComponent_Sample },
    { path: 'helloworld/spiffy.sample', component: spiffy_sample_1.HelloWorldComponent_Sample_Spiffy }
];
exports.routing = router_1.RouterModule.forRoot(routes, {
    useHash: true
});
//# sourceMappingURL=docs.routing.js.map