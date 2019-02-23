import {History} from 'history';
import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import {combineReducers} from 'redux';
import {routerMiddleware, RouterState} from 'connected-react-router'
import {createRouterReducer} from './router';
import {authorSlice} from './appReducers';

interface AppState {
    router: RouterState,
    // books: [],
    // authors: [],
    // publishers: [],
}

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
