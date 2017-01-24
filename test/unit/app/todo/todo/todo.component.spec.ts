import {TodoComponent} from '../../../../../src/app/todo/todo/todo.component';
import {SelectableItem} from '../../../../../src/app/todo/models/item.model';
import Spy = jasmine.Spy;


describe('Todo Component', () => {
    let component: TodoComponent;

    beforeEach(() => {
        component = new TodoComponent();
        spyOn(component.checklistChange, 'emit');
    });

    it('should be initialized with an empty list', () => {
        let expectation = [];
        expect(component._checklist).toEqual(expectation);
    });

    it('should be able to add new items', () => {
        let expectation = [new SelectableItem('Purple')];
        component.newItem = 'Purple';
        component.add();
        expect(component._checklist).toEqual(expectation);
    });

    it('should be able to process an external update to checklist', function (){
        let list = ['blue', 'red', 'purple', 'green', 'black'];
        let siList = list.map((item) => { return new SelectableItem(item); });

        component.checklist = list;

        expect(component._checklist).toEqual(siList);
    });

    it('should clear the newItem field after adding the item', () => {
        component.newItem = 'Purple';
        component.add();
        expect(component.newItem).toEqual('');
    });

    it('should have a method for updating the list', () => {
        let expectation = ['blue', 'red', 'green'];

        ['blue', 'red', 'purple', 'green', 'black'].forEach((color) => {
            component.newItem = color;
            component.add();
        });

        component._checklist[2].selected = true;
        component._checklist[4].selected = true;

        component.update();

        expect(component.checklistChange.emit).toHaveBeenCalledWith(expectation);
    });

});
