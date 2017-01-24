export class GenericPO {
    protected container;

    constructor(container) {
        this.container = container;
    }

    isPresent = () => {
        return this.container.isPresent();
    };


}