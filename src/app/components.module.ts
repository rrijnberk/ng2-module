import {NgModule} from '@angular/core';
import {HelloWorldComponent} from './HelloWorld/HelloWorld';
import {TodoModule} from './todo/todo.module'

@NgModule({
    imports:      [  ],
    exports:      [
        TodoModule ,
        HelloWorldComponent
    ],
    declarations: [ HelloWorldComponent ],
    bootstrap:    [  ]
})
export class ComponentsModule { }
