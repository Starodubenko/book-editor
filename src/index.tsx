import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {configureAppStore} from './boot';
import './index.module.scss';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();
const store = configureAppStore(history, {});
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>,
    rootEl
);
