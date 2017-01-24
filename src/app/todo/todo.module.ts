import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './list/list.component';
import {TodoListOptionComponent} from './option/option.component';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    exports:      [ TodoComponent ],
    declarations: [
        TodoComponent,
        TodoListComponent,
        TodoListOptionComponent
    ],
    bootstrap:    [  ]
})
export class TodoModule { }
