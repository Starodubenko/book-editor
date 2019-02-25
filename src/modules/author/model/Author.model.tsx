import {AbstractEntity} from "../../common";
import {Book} from "../../book/model/Book.model";

export class Author extends AbstractEntity {
    /**
        Name of author, not greater than 20 symbols
    */
    name: string;

    /**
        Surname of author, not greater than 20 symbols
    */
    surname: string;

    /**
        Books of the author
     */
    books: Book[];

    constructor(id: string, name: string, surname: string, books: Book[] = []) {
        super(id);
        this.name = name;
        this.surname = surname;
        this.books = books;
    }
}
