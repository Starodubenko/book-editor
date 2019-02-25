import {Book} from "../model/Book.model";
import {AppEntitiesState, ReduxOrmModelReducer, createReduxOrmModelReducer} from "../../common";
import {createAction} from "redux-actions";

export interface IBookActionHandlers {
    'Book/create': ReduxOrmModelReducer<Book, AppEntitiesState>;
    update: ReduxOrmModelReducer<Book, AppEntitiesState>;
    remove: ReduxOrmModelReducer<Book, AppEntitiesState>;
}

export const bookActionsMap: IBookActionHandlers = {
    'Book/create': (action, model, session) => {
        model.create(action.payload)
    },
    update: (action, model, session) => {
        // const index = action.payload;
        // const todo = state[index];
        // todo.completed = !todo.completed;
    },
    remove: (action, model, session) => {
        // const index = action.payload;
        // const todo = state[index];
        // todo.completed = !todo.completed;
    }
};

export const bookReducer = createReduxOrmModelReducer<IBookActionHandlers, Book, AppEntitiesState>(bookActionsMap);

export const createBookAction = createAction('Book/create');
