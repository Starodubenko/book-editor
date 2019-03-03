import {createReducer, ORM} from 'redux-orm';
import {BookSchema, PublisherSchema} from "../book/state";
import {AppEntitiesState} from "../common";
import {AuthorSchema} from "../author/state";

export const appStateOrm = new ORM<AppEntitiesState>();
// @ts-ignore
appStateOrm.register(BookSchema, AuthorSchema, PublisherSchema);

export const ormReducer = createReducer<AppEntitiesState>(appStateOrm);

export const dbStateSelector = state => {
    return state;
};
