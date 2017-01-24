import {Component} from "@angular/core";

@Component({
    selector: 'rr-todo-default',
    templateUrl: 'default.sample.html'
})
export class TodoComponent_Sample {
    public sample: Object;

    constructor() {
        this.sample = {
            list: [
                'Fruit',
                'Vegetables',
                'Milk',
                'Eggs',
                'Snacks'
            ]
        };
    }
}