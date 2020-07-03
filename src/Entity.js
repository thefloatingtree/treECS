import { uuidv4 } from "./Util";

export class Entity {
    constructor() {
        this.id = uuidv4();
        this.components = new Map();
        this.componentTypes = [];
    }

    addComponent(Component, initialState = {}) {
        let newComponent = new Component();
        Object.assign(newComponent, initialState);
        this.components.set(Component.name, newComponent);
        this.componentTypes.push(Component);
        return this;
    }

    removeComponent(Component) {
        this.components.delete(Component.name);
        this.componentTypes.splice(this.componentTypes.indexOf(Component), 1);
        return this;
    }

    getComponent(Component) {
        return this.components.get(Component.name);
    }

    getComponents() {
        return this.components.entries();
    }

    hasComponent(Component) {
        // !!~ turns result of indexOf into a boolean
        return !!~this.componentTypes.indexOf(Component);
    }

    hasAllComponents(ComponentArray) {
        let result = true;
        ComponentArray.forEach(Component => {
            result = result && !!~this.componentTypes.indexOf(Component);
        });
        return result;
    }
}