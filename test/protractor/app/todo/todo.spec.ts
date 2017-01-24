import { ElementFinder, browser, by, element } from 'protractor';

import { TodoSamplePO } from './todosample.po';


describe('Todo component', () => {
    let sample;
    let defaultList = [
        'Fruit',
        'Vegetables',
        'Milk',
        'Eggs',
        'Snacks'
    ];

    beforeEach(() => {
        browser.get('http://localhost:8080/example/#/todo/');
        sample = new TodoSamplePO(element(by.tagName('rr-todo-default')));
    });

    it('sample page should have a sample', () => {
        expect(sample.isPresent()).toBeTruthy();
    });

    it('sample should have a default list', () => {

        expect(sample.list).toEqual(defaultList);
    });

    it('sample should have a todo component', () => {
        expect(sample.todo.isPresent()).toBeTruthy();
    });
    
    it('should be able to add a new item', () => {
        sample.todo.label_text_input.sendKeys('Protractor');
        sample.todo.add_button.click();
        expect(sample.todo.list.size()).toBe(6, 'The inner list should have been updated');
        expect(sample.list).toEqual(defaultList, 'The outer list should not have been updated yet');
    });

    it('should be able to add a new item', () => {
        let newList = defaultList;
        let newItem = 'Protractor';

        newList.push(newItem);

        sample.todo.label_text_input.sendKeys(newItem);
        sample.todo.add_button.click();
        sample.todo.save_button.click();

        expect(sample.todo.list.size()).toBe(6, 'The inner list should have been updated');
        expect(sample.list).toEqual(newList, 'The outer list should have been updated');
    });

    it('should not update on selecting items', () => {
        sample.todo.list.option(1).click();
        sample.todo.list.option(3).click();

        expect(sample.todo.list.size()).toBe(5);
    });

    it('should be able to clear completed items', () => {
        let newList = [
            'Fruit',
            // 'Vegetables',
            'Milk',
            // 'Eggs',
            'Snacks'
        ];

        sample.todo.list.option(1).click();
        sample.todo.list.option(3).click();
        sample.todo.save_button.click();

        expect(sample.todo.list.size()).toBe(3, 'The inner list should have been updated');
        expect(sample.list).toEqual(newList, 'The outer list should have been updated');
    });


});