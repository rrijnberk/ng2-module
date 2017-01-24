import {RouterModule, Routes} from '@angular/router';

import {HelloWorldComponent_Sample} from './HelloWorld/default.sample';
import {HelloWorldComponent_Sample_Spiffy} from './HelloWorld/spiffy.sample';
import {TodoComponent_Sample} from './todo/default.sample';

const routes: Routes = [
    { path: 'helloworld', component: HelloWorldComponent_Sample },
    { path: 'helloworld/spiffy', component: HelloWorldComponent_Sample_Spiffy },
    { path: 'todo', component: TodoComponent_Sample }
];

export const routing = RouterModule.forRoot(routes, {
    useHash: true
});
