import React from 'react';
import { Story, Meta } from '@storybook/react';

import Contact from './contact';

export default {
    title: "개인블로그/Ui/Organisms/Contact",
    component: Contact
} as Meta

const template: Story = (args) => <Contact {...args} />;

export const Basic = template.bind({});
Basic.args = {

};