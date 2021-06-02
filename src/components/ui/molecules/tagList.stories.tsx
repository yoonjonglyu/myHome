import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import { TagList, TagListProps } from './tagList';

export default {
    title: "개인블로그/Ui/Molecules/TagList",
    component: TagList,
    decorators: [(Story) => <Router><Story /></Router>]
} as Meta

const template: Story<TagListProps> = (args) => <TagList {...args} />;

export const Basic = template.bind({});
Basic.args = {
    tagList: [
        {
            idx: 1,
            name: "HTML5",
        },
        {
            idx: 2,
            name: "CSS3",
        },
        {
            idx: 3,
            name: "ES6",
        }
    ]
};