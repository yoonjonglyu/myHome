import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import Tech from './tech';
import Store from '../store/configureStore';

export default {
    title: "View/Tech",
    component: Tech,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story = (args) => <Tech {...args} />;

export const Basic = template.bind({});
Basic.args = {

};