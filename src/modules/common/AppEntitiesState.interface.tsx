import {ORMCommonState, TableState} from "redux-orm";
import {Book} from "../book/model/Book.model";
import {Author} from "../author/model/Author.model";
import {Publisher} from "./model";

export interface AppEntitiesState extends ORMCommonState {
    books: TableState<Book>,
    authors: TableState<Author>,
    publishers: TableState<Publisher>,
}
