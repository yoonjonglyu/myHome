import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './header';
import Store from '../../../store/configureStore';

export default {
    title: "개인블로그/Layout/Header",
    component: Header,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = template.bind({});
Basic.args = {

};
