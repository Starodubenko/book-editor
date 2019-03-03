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
        const authorIds = action.payload.authors.reduce((acc: Array<string>, author: Author) => {
            session.Author.create(author);
            acc.push(author.id);

            return acc;
        }, []);

        session.Book.create(new Book(
            'Book_' + Math.round(Math.random() * 10000),
            'Book ',
            // @ts-ignore
            authorIds,
            1,
            new Publisher('Publisher_'+ Math.round(Math.random() * 10000), 'Publisher Name'),
            'Book publication year',
            'Release year',
            'ISBN'
        ));
    },
    [BookUpdateActionType]: (action, model, session) => {
        model.withId(action.payload.id).update(action.payload)
    },
    [BookDeleteActionType]: (action, model, session) => {
        model.withId(action.payload).delete();
    }
};

export const bookReducer = createReduxOrmModelReducer<IBookActionHandlers, Book, AppEntitiesState>(bookActionsMap);
