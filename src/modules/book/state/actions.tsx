import {createAction} from "redux-actions";
import {Book} from "../model/Book.model";

export const BookCreateActionType = 'Book/create';
export const BookUpdateActionType = 'Book/update';
export const BookDeleteActionType = 'Book/delete';

export const createBookAction = createAction<Book>(BookCreateActionType);
export const updateBookAction = createAction<Book>(BookUpdateActionType);
export const deleteBookAction = createAction<Book>(BookDeleteActionType);
