import {NgModule} from '@angular/core';
import {HelloWorldComponent} from './HelloWorld/HelloWorld';
import {AlternativeComponentsModule} from '@rrijnberk/alternative-components';

const components = [
    HelloWorldComponent
];

@NgModule({
    imports:      [ AlternativeComponentsModule ],
    exports:      [ ...components ],
    declarations: [ ...components ],
    bootstrap:    [  ]
})
export class ComponentsModule { }
