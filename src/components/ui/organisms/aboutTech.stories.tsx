import React from 'react';
import { Story, Meta } from '@storybook/react';

import AboutTech from './aboutTech';

export default {
    title: "개인블로그/Ui/Organisms/AboutTech",
    component: AboutTech
} as Meta

const template: Story = (args) => <AboutTech {...args} />;

export const Basic = template.bind({});
Basic.args = {

};