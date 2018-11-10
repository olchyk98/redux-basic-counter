import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state = 0, { type, payload }) {
    let a = 0;

    switch(type) {
        case 'UPDATE_PER_ONE':
            a = state + payload;
        break;
        default:
            a = state;
        break;
    }

    return a;
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
