"use strict";
require('reflect-metadata');
require('core-js/client/shim');
require('ts-helpers');
require('zone.js/dist/zone');
if (process.env.ENV === 'build') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map