import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducerProcess from './reducers';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducerProcess
    , composeEnchancers(applyMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#root')
)