import {Book} from "./Book.model";

export class BookState {
    books: Book[];

    constructor(books: Book[]) {
        this.books = books;
    }
}
