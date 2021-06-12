import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PortfolioModal, PortfolioModalProps } from './portfolioModal';

export default {
    title: "개인블로그/Portfolio/PortfolioModal",
    component: PortfolioModal
} as Meta

const template: Story<PortfolioModalProps> = (args) => <PortfolioModal {...args} />;

export const Basic = template.bind({});
Basic.args = {

};