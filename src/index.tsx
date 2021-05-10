import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store/configureStore';

import App from './app';


const render = (Components: React.FC) => {
    ReactDOM.render(
        <Provider store={Store}>
            <Components />
        </Provider>,
        document.getElementById('app')
    );
};

render(App);