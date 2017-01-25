import {Component, Input} from "@angular/core";
import {SelectableItem} from "../models/item.model";

/**
 * Todo list component
 */
@Component({
    selector: 'rr-todo-list',
    styleUrls: ['./list.component.scss'],
    templateUrl: './list.component.html'
})
export class TodoListComponent {
    @Input() items: Array<SelectableItem>;
}