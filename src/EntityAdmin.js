import { Entity } from './Entity';
import { Query } from  './Query';

export class EntityAdmin {
    constructor() {
        this.systems = [];
        this.entities = [];
        this.queries = {};
        this.singletonComponents = [];

        this.firstUpdate = true;
    }

    update(delta) {
        if (this.firstUpdate) this.init();
        this.systems.forEach(system => {
            system.update(delta);
        });
    }

    init() {
        this._updateQueries();
        this.firstUpdate = true;
    }

    registerSystem(System) {
        this.systems.push(new System(this.queries));
        return this;
    }

    registerQuery(name, ComponentArray) {
        this.queries[name] = new Query(name, ComponentArray);
        return this;
    }

    createEntity() {
        let newEntity = new Entity();
        this.entities.push(newEntity);
        this._updateQueries(); // I'd rather not iterate over every entity every time we add one.
        return newEntity;
    }

    addSingletonComponent(Component, initialState = {}) {
        
    }

    _updateQueries() {
        // TODO: This is terribly inefficient
        // Iterate over properties in the queries object
        for (const queryName in this.queries) {
            // Clear entities in each query
            this.queries[queryName].entities = [];
        }
        this.entities.forEach(entity => {
            for (const queryName in this.queries) {
                const query = this.queries[queryName];
                if (query.match(entity)) {
                    query.entities.push(entity);
                }
            }
        })
    }
}