import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import NotFound from './notFound';
import Store from '../store/configureStore';

export default {
    title: "View/NotFound",
    component: NotFound,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story = (args) => <NotFound {...args} />;

export const Basic = template.bind({});
Basic.args = {

};