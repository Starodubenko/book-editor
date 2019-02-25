import {connectRouter} from 'connected-react-router';
import {History} from 'history';

export const createRouterReducer = (history: History) => ({
    router: connectRouter(history)
});
