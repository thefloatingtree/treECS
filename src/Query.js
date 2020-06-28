export class Query {
    constructor(name, ComponentArray) {
        this.name = name;
        this.components = ComponentArray;
        this.entities = [];
    }

    match(entity) {
        return entity.hasAllComponents(this.components);
    }
}