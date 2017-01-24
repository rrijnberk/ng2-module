import { protractor, by, element } from 'protractor';
import {GenericPO} from "./generic.po";

export class TodoPO extends GenericPO {
    private LIST_TAGNAME = 'rr-todo-list';

    get add_button() {
        return this.container.element(by.css('.todo__controls > button'));
    }

    get label_text_input() {
        return this.container.element(by.css('.todo__controls > input'));
    }

    get list() {
        return new TodoListPO(this.container.element(by.tagName(this.LIST_TAGNAME)));
    }

    get save_button() {
        return this.container.element(by.css('.todo__footer > button'));
    }
}

export class TodoListPO extends GenericPO {
    private OPTION_TAGNAME = 'rr-todo-list-option';

    size = () => {
        let deferred = protractor.promise.defer();
        this.container.all(by.tagName(this.OPTION_TAGNAME)).then((options) => {
            deferred.fulfill(options.length);
        });
        return deferred.promise;
    };

    option = (index) => {
        return new TodoListOptionPO(this.container.all(by.tagName(this.OPTION_TAGNAME)).get(index));
    }

}

export class TodoListOptionPO extends GenericPO {
    click = () => {
        this.container.element(by.tagName('input')).click();
    }
}
