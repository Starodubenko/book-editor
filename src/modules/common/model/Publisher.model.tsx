import {AbstractEntity} from "./AbstractEntity.model";

export class Publisher extends AbstractEntity {
    /**
        Name of publisher
    */
    name: string;

    constructor(id: string, name: string) {
        super(id);
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

