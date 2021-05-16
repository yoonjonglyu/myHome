import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Layout, LayoutProps } from './layout';

export default {
    title: "개인블로그/Layout/Layout",
    component: Layout
} as Meta

const template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Basic = template.bind({});
Basic.args = {
    
};
