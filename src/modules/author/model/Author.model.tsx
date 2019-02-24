import {AbstractEntity} from "@app/common";

export class Author extends AbstractEntity {
    /**
        Name of author, not greater than 20 symbols
    */
    name: string;

    /**
        Surname of author, not greater than 20 symbols
    */
    surname: string;

    constructor(id: string, name: string, surname: string) {
        super(id);
        this.name = name;
        this.surname = surname;
    }
}
