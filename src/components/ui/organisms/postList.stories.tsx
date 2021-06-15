import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import { PostList, PostListProps } from './postList';
import Store from '../../../store/configureStore';

export default {
    title: "개인블로그/Ui/Organisms/PostList",
    component: PostList,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story<PostListProps> = (args) => <PostList {...args} />;

export const Basic = template.bind({});
Basic.args = {

};