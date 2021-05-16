import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './header';
import Store from '../../../store/configureStore';

export default {
    title: "개인블로그/Layout/Header",
    component: Header
} as Meta

const template: Story<HeaderProps> = (args) => <Provider store={Store}><Header {...args} /></Provider>;

export const Basic = template.bind({});
Basic.args = {
    
};
