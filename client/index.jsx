import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './components/app/index.jsx';
import reducer from './reducers/index.js';

React.render(
    <Provider store={createStore(reducer)}>
        {() => <App/>}
    </Provider>
, document.getElementById('app'))
