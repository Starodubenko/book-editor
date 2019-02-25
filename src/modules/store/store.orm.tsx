import {createReducer, ORM} from 'redux-orm';
import {AuthorSchema, BookSchema} from "../book/state";
import {AppEntitiesState} from "../common";

export const appStateOrm = new ORM<AppEntitiesState>();
// @ts-ignore
appStateOrm.register(BookSchema, AuthorSchema);

export const ormReducer = createReducer<AppEntitiesState>(appStateOrm);

export const dbStateSelector = state => {
    return state;
};
