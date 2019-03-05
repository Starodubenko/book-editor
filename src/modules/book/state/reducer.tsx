import {Book} from "../model/Book.model";
import {AppEntitiesState, createReduxOrmModelReducer, Publisher, ReduxOrmModelReducer} from "../../common";
import {BookCreateActionType, BookDeleteActionType, BookUpdateActionType} from "./actions";
import {Author} from "../../author/model/Author.model";

export interface IBookActionHandlers {
    [BookCreateActionType]: ReduxOrmModelReducer<Book, AppEntitiesState>;
    [BookUpdateActionType]: ReduxOrmModelReducer<Book, AppEntitiesState>;
    [BookDeleteActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

export const bookActionsMap: IBookActionHandlers = {
    [BookCreateActionType]: (action, model, session) => {
        const authors = action.payload.authors;

        // @ts-ignore
        action.payload.authors = authors.reduce((acc: Array<string>, author: Author) => {
            session.Author.create(author);
            acc.push(author.id);

            return acc;
        }, []);

        session.Book.create(action.payload);
    },
    [BookUpdateActionType]: (action, model, session) => {
        model.withId(action.payload.id).update(action.payload)
    },
    [BookDeleteActionType]: (action, model, session) => {
        model.withId(action.payload).delete();
    }
};

export const bookReducer = createReduxOrmModelReducer<IBookActionHandlers, Book, AppEntitiesState>(bookActionsMap);
