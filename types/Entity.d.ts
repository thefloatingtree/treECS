export class Entity {
    id: string;
    components: any;
    componentTypes: any[];
    addComponent(Component: any, initialState?: {}): Entity;
    removeComponent(Component: any): Entity;
    getComponent(Component: any): any;
    getComponents(): any;
    hasComponent(Component: any): boolean;
    hasAllComponents(ComponentArray: any): boolean;
}
