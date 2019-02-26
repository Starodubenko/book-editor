import {Book} from "../model/Book.model";
import {AppEntitiesState, createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../common";
import {BookCreateActionType, BookUpdateActionType, BookDeleteActionType} from "./actions";

export interface IBookActionHandlers {
    [BookCreateActionType]: ReduxOrmModelReducer<Book, AppEntitiesState>;
    [BookUpdateActionType]: ReduxOrmModelReducer<Book, AppEntitiesState>;
    [BookDeleteActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

export const bookActionsMap: IBookActionHandlers = {
    [BookCreateActionType]: (action, model, session) => {
        model.create(action.payload);
    },
    [BookUpdateActionType]: (action, model, session) => {
        model.withId(action.payload.id).update(action.payload)
    },
    [BookDeleteActionType]: (action, model, session) => {
        model.withId(action.payload).delete();
    }
};

export const bookReducer = createReduxOrmModelReducer<IBookActionHandlers, Book, AppEntitiesState>(bookActionsMap);
