import {createAction} from "redux-actions";
import {Author} from "../model/Author.model";

export const AuthorCreateActionType = 'Author/create';
export const AuthorUpdateActionType = 'Author/update';
export const AuthorDeleteActionType = 'Author/delete';

export const createAuthorAction = createAction<Author>(AuthorCreateActionType);
export const updateAuthorAction = createAction<Author>(AuthorUpdateActionType);
export const deleteAuthorAction = createAction<Author>(AuthorDeleteActionType);
