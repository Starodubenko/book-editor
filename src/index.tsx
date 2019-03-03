import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {configureAppStore} from './boot';
import './index.module.scss';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {BookEditItem} from "./modules/book/components/BookIEdittem";


const history = createBrowserHistory();
const store = configureAppStore(history, {});
const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/:id/edit/" component={BookEditItem}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    rootEl
);
