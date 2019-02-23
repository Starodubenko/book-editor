import {Author} from "./Author.model";

export class AuthorState {
    authors: Author[];

    constructor(authors: Author[]) {
        this.authors = authors;
    }

}
