import {createSlice} from 'redux-starter-kit';
import {CaseReducer, CaseReducersMapObject} from "redux-starter-kit/src/createReducer";
import {Action} from "redux-actions";
import {AuthorState} from "../model/AuthorState.model";
import {Author} from "../model/Author.model";

export interface IAuthorActionHandlers extends CaseReducersMapObject {
    create: CaseReducer<AuthorState, Action<Author>>;
    update: CaseReducer<AuthorState, Action<Author>>;
    remove: CaseReducer<AuthorState, Action<Author>>;
}

export const authorActionsMap: IAuthorActionHandlers = {
    create: (state: AuthorState, action: Action<Author>) => {
        // const todo = action.payload;
        // state.push(todo);
    },
    update: (state: AuthorState, action: Action<Author>) => {
        // const index = action.payload;
        // const todo = state[index];
        // todo.completed = !todo.completed;
    },
    remove: (state: AuthorState, action: Action<Author>) => {
        // const index = action.payload;
        // const todo = state[index];
        // todo.completed = !todo.completed;
    }
};


export const authorSlice = createSlice<any, any, IAuthorActionHandlers>({
    slice: 'author',
    initialState: [],
    reducers: authorActionsMap,
});