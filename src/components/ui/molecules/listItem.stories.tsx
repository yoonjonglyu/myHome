import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ListItem, ListItemProps } from './listItem';

export default {
    title: "개인블로그/Ui/Molecules/ListItem",
    component: ListItem
} as Meta

const template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Basic = template.bind({});
Basic.args = {

};