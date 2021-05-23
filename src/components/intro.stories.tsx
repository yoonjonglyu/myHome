import React from 'react';
import { Story, Meta } from '@storybook/react';

import Intro from './intro';

export default {
    title: "개인블로그/Intro",
    component: Intro
} as Meta

const template: Story = (args) => <Intro {...args} />;

export const Basic = template.bind({});
Basic.args = {

};