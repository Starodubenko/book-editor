import {History} from 'history';
import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import {combineReducers} from 'redux';
import {routerMiddleware} from 'connected-react-router'
import {createRouterReducer} from '../../boot/router';
import {AppState} from "../common";
import {ormReducer} from "./store.orm";
import { reducer as formReducer } from 'redux-form';
import {goToEditBookPage} from "../book/middleware";

export function configureAppStore(history: History, preloadedState: any = {}) {
    const rootReducer = combineReducers<AppState>({
        ...createRouterReducer(history),
        entities: ormReducer,
        form: formReducer,
    });

    const store = configureStore({
        reducer: rootReducer,
        middleware: [
            ...getDefaultMiddleware(),
            routerMiddleware(history),
            goToEditBookPage
        ],
        preloadedState,
        enhancers: []
    });

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('./appReducers', () => store.replaceReducer(rootReducer))
    // }

    return store
}
