export class System {
    constructor(entityAdmin, queries) {
        this.queries = queries;
        this.entityAdmin = entityAdmin;

        if (this.init)
            this.init();
    }
}