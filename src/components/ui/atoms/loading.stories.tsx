import React from 'react';
import { Story, Meta } from '@storybook/react';

import Loading from './loading';

export default {
    title: "개인블로그/Ui/Atoms/Loading",
    component: Loading
} as Meta

const template: Story = (args) => <Loading {...args} />;

export const Basic = template.bind({});
Basic.args = {

};