import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import { Portfolio, PortfolioProps } from './portfolio';
import Store from '../store/configureStore';

export default {
    title: "View/Portfolio",
    component: Portfolio,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story<PortfolioProps> = (args) => <Portfolio {...args} />;

export const Basic = template.bind({});
Basic.args = {

};