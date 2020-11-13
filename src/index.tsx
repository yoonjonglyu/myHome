import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './configureStore';

import App from './app';


const render = (Components: React.FC) => {
    ReactDOM.render(
        <Provider store={store()}>
            <Components />
        </Provider>,
        document.getElementById('app')
    );
};

render(App);