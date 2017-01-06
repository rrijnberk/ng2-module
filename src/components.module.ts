import {NgModule} from '@angular/core';
import {HelloWorldComponent} from './HelloWorld/HelloWorld';

const components = [
    HelloWorldComponent
];

@NgModule({
    imports:      [  ],
    exports:      [ ...components ],
    declarations: [ ...components ],
    bootstrap:    [  ]
})
export class ComponentsModule { }
