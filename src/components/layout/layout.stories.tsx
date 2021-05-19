import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import { Layout, LayoutProps } from './layout';
import Store from '../../store/configureStore';

export default {
    title: "개인블로그/Layout/Layout",
    component: Layout,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Basic = template.bind({});
Basic.args = {
    children: <h1>테스트</h1>
};
