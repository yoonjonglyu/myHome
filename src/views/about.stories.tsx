import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import About from './about';
import Store from '../store/configureStore';

export default {
    title: "VIEW/About",
    component: About,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story = (args) => <About {...args} />;

export const Basic = template.bind({});
Basic.args = {
};