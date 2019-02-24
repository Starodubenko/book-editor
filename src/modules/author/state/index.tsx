import {createSlice, PayloadAction} from 'redux-starter-kit';
import {CaseReducer, CaseReducersMapObject} from "redux-starter-kit/src/createReducer";
import {Action} from "redux-actions";
import {AbstractEntity} from "@app/common";
import {AuthorState} from "../model/AuthorState.model";
import {Author} from "../model/Author.model";

export interface IAuthorActionHandlers extends CaseReducersMapObject {
    create: CaseReducer<AuthorState, Action<Author>>;
    update: CaseReducer<AuthorState, Action<Author>>;
    remove: CaseReducer<AuthorState, Action<AbstractEntity>>;
}

export const authorActionsMap: IAuthorActionHandlers = {
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

export const authorSlice = createSlice<AuthorState, PayloadAction<Author>, IAuthorActionHandlers>({
    slice: 'author',
    initialState: new AuthorState([]),
    reducers: authorActionsMap,
});
