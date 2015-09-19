import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './components/app/index.jsx';
import reducer from './reducers/index.js';
import {listenToSocket} from './actions/index.js';

let store = createStore(reducer);

listenToSocket(store);

React.render(
    <Provider store={store}>
        {() => <App/>}
    </Provider>
, document.getElementById('app'))

