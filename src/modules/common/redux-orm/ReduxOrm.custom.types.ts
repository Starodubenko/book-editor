import {Model, ORMCommonState, SessionWithModels} from "redux-orm";
import {Action} from "redux-actions";

export type ReduxOrmModelReducer<P, ORMState extends ORMCommonState> = (action: Action<P>, modelClass: typeof Model, session: SessionWithModels<ORMState> )=> any

export function createReduxOrmModelReducer<HandlersMap, P, ORMState extends ORMCommonState>
                                          (map: HandlersMap): ReduxOrmModelReducer<P, ORMState> {
    return (action: Action<P>, model: any, session: SessionWithModels<ORMState>) => {
        // const modelName = model.modelName;
        // const handlerKey = `${modelName}/${action.type}`;
        const handler = map[action.type];
        handler && handler(action, model, session);
    }
}
