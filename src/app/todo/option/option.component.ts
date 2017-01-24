import {Component, Input, Output} from "@angular/core";
import {SelectableItem} from "../models/item.model";

/**
 * Option component for the todo list
 */
@Component({
    selector: 'rr-todo-list-option',
    templateUrl: './option.component.html'
})
export class TodoListOptionComponent {
    private _item: SelectableItem;


    constructor() {}

    @Input('item')
    get item(): SelectableItem {
        return this._item;
    }

    set item(item: SelectableItem) {
        this._item = item;
    }

    toggle = () => {
        this._item.selected = !this._item.selected;
    }


}