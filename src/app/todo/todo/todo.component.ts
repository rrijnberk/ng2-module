import {Component, Input, Output, EventEmitter} from "@angular/core";
import {SelectableItem} from "../models/item.model";

/**
 * Todo list component
 */
@Component({
    selector: 'rr-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    public _checklist: Array<SelectableItem> = [];
    public newItem: string;
    @Output() checklistChange = new EventEmitter();

    @Input('checklist')
    set checklist(checklist: Array<string>) {
        this._checklist = checklist.map((value: string) => {
            return new SelectableItem(value);
        });
    }

    get checklist(): Array<string> {
        return this._checklist
            .filter((item) => {
                return !item.selected;
            })
            .map((item: SelectableItem) => {
            return item.value;
        });
    }

    add = () => {
        let newItem = this.newItem ? this.newItem.trim() : '';
        if(newItem) {
            let result = this.checklist;
            this._checklist.push(new SelectableItem(newItem));
            this.newItem = '';
        }
    };

    update = () => {
        this.checklistChange.emit(this.checklist);
    };

}