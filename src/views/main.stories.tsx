import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import { Main, MainProps } from './main';
import Store from '../store/configureStore';

export default {
    title: "View/Main",
    component: Main,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story<MainProps> = (args) => <Main {...args} />;

export const Basic = template.bind({});
Basic.args = {

};