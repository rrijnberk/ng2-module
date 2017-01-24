export class SelectableItem {
    public selected: boolean;
    public value: string;

    constructor(value: string) {
        this.selected = false;
        this.value = value;
    }
}