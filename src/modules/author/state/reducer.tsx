import {Author} from "../model/Author.model";
import {AppEntitiesState, createReduxOrmModelReducer, ReduxOrmModelReducer} from "../../common";
import {AuthorCreateActionType, AuthorDeleteActionType, AuthorUpdateActionType} from "./actions";

export interface IAuthorActionHandlers {
    [AuthorCreateActionType]: ReduxOrmModelReducer<Author, AppEntitiesState>;
    [AuthorUpdateActionType]: ReduxOrmModelReducer<Author, AppEntitiesState>;
    [AuthorDeleteActionType]: ReduxOrmModelReducer<string, AppEntitiesState>;
}

export const authorActionsMap: IAuthorActionHandlers = {
    [AuthorCreateActionType]: (action, model, session) => {
        model.create(action.payload);
    },
    [AuthorUpdateActionType]: (action, model, session) => {
        model.withId(action.payload.id).update(action.payload)
    },
    [AuthorDeleteActionType]: (action, model, session) => {
        model.withId(action.payload).delete();
    }
};

export const authorReducer = createReduxOrmModelReducer<IAuthorActionHandlers, Author, AppEntitiesState>(authorActionsMap);
