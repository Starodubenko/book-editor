import {AbstractEntity, Publisher} from "@app/common";
import {Author} from "../../author/model/Author.model";

export class Book extends AbstractEntity {
    /**
        Title, not greater than 30 symbols
    */
    title: string;

    /**
        List of authors, at least one author
    */
    authors: Author[];

    /**
        Page count, between 1 and 10000
    */
    pageCount: number;

    /**
        Publisher, who released the book
    */
    publisher: Publisher;

    /**
        Publication year, not earlier than 1800
    */
    publicationYear: string;

    /**
        Release year, not earlier than 1800
    */
    releaseYear: string;

    /**
        International Standard Book Number
    */
    isbn: string;

    /**
        Book image link
    */
    imageLink: string;


    constructor(id: string,
                title: string,
                authors: Author[],
                pageCount: number,
                publisher: Publisher,
                publicationYear: string = '',
                releaseYear: string = '',
                isbn: string = '',
                imageLink: string = ''
    ) {
        super(id);
        this.title = title;
        this.authors = authors;
        this.pageCount = pageCount;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.releaseYear = releaseYear;
        this.isbn = isbn;
        this.imageLink = imageLink;
    }
}
