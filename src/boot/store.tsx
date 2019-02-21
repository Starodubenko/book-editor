import {History} from 'history';
import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import {combineReducers} from 'redux';
import {routerMiddleware} from 'connected-react-router'
import {createRouterReducer} from './router';


export function configureAppStore(history: History, preloadedState: any = {}) {
    const rootReducer = combineReducers({
        ...createRouterReducer(history),
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
