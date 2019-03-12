import {Author} from "./Author.model";

export class AuthorBuilder {
    static create(props: any): Author {
        const {id, name, surname, books} = props;
        return new Author(id, name, surname, books);
    }
}
