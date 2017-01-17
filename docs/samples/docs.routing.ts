import {RouterModule, Routes} from '@angular/router';

import {HelloWorldComponent_Sample} from './HelloWorld/default.sample';
import {HelloWorldComponent_Sample_Spiffy} from './HelloWorld/spiffy.sample';

const routes: Routes = [
    { path: 'helloworld/default.sample', component: HelloWorldComponent_Sample },
    { path: 'helloworld/spiffy.sample', component: HelloWorldComponent_Sample_Spiffy }
];

export const routing = RouterModule.forRoot(routes, {
    useHash: true
});
