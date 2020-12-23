export class Scene {
    id: string;
    systems: any[];
    entities: any[];
    queries: {};
    singletonComponents: Entity;
    firstUpdate: boolean;
    update(delta: any): void;
    _init(): void;
    registerSystem(System: any): Scene;
    registerQuery(name: any, ComponentArray: any): Scene;
    createEntity(): Entity;
    removeEntity(entity: any): Scene;
    addSingletonComponent(Component: any, initialState?: {}): Scene;
    _updateQueries(): void;
}
import { Entity } from "./Entity";
