import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PortfolioList, PortfolioListProps } from './portfolioList';

export default {
    title: "개인블로그/Portfolio/PortfolioList",
    component: PortfolioList
} as Meta

const template: Story<PortfolioListProps> = (args) => <PortfolioList {...args} />;

export const Basic = template.bind({});
Basic.args = {

};