import { protractor, by, element } from 'protractor';
import {GenericPO} from "../../../../src/po/generic.po";
import {TodoPO} from "../../../../src/po/todo.po";


export class TodoSamplePO extends GenericPO {
    private TODO_TAGNAME = 'rr-todo';

    get list() {
        let deferred = protractor.promise.defer();
        this.container.element(by.id('result')).getText().then((text) => {
            deferred.fulfill(text.split(','));
        });
        return deferred.promise;
    }

    get todo() {
        return new TodoPO(this.container.element(by.tagName(this.TODO_TAGNAME)));
    }
}