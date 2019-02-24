import {createSlice, PayloadAction} from 'redux-starter-kit';
import {CaseReducer, CaseReducersMapObject} from "redux-starter-kit/src/createReducer";
import {Action} from "redux-actions";
import {BookState} from "../model/BookState.model";
import {Book} from "../model/Book.model";
import {AbstractEntity} from "../../common/model/AbstractEntity.model";

export interface IAuthorActionHandlers extends CaseReducersMapObject {
    create: CaseReducer<BookState, Action<Book>>;
    update: CaseReducer<BookState, Action<Book>>;
    remove: CaseReducer<BookState, Action<AbstractEntity>>;
}

export const bookActionsMap: IAuthorActionHandlers = {
    create: (state, action) => {
        // const todo = action.payload;
        // state.push(todo);
    },
    update: (state, action) => {
        // const index = action.payload;
        // const todo = state[index];
        // todo.completed = !todo.completed;
    },
    remove: (state, action) => {
        // const index = action.payload;
        // const todo = state[index];
        // todo.completed = !todo.completed;
    }
};

export const bookSlice = createSlice<BookState, PayloadAction<Book>, IAuthorActionHandlers>({
    slice: 'author',
    initialState: new BookState([]),
    reducers: bookActionsMap,
});
