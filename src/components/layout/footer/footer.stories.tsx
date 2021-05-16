import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Footer, FooterProps } from './footer';

export default {
    title: "개인블로그/Layout/Footer",
    component: Footer
} as Meta

const template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Basic = template.bind({});
Basic.args = {
    
};