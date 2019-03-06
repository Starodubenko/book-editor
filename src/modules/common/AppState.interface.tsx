import {RouterState} from "connected-react-router";
import {AppEntitiesState} from "./AppEntitiesState.interface";

export interface AppState {
    router: RouterState,
    entities: AppEntitiesState,
    form: any, //todo add the right type
}
