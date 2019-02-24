import {History} from 'history';
import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import {combineReducers} from 'redux';
import {routerMiddleware} from 'connected-react-router'
import {AppState} from "@app/common";
import {createRouterReducer} from './router';
import {authorSlice} from './appReducers';

export function configureAppStore(history: History, preloadedState: any = {}) {
    const rootReducer = combineReducers<AppState>({
        ...createRouterReducer(history),
        [authorSlice.slice]: authorSlice.reducer
    });

    const store = configureStore({
        reducer: rootReducer,
        middleware: [
            ...getDefaultMiddleware(),
            routerMiddleware(history),
        ],
        preloadedState,
        enhancers: []
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./appReducers', () => store.replaceReducer(rootReducer))
    }

    return store
}
