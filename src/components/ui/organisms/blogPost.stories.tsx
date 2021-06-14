import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import BlogPost from './blogPost';
import Store from '../../../store/configureStore';

export default {
    title: "개인블로그/Ui/Organisms/BlogPost",
    component: BlogPost,
    decorators: [(Story) => <Provider store={Store}><Router><Story /></Router></Provider>]
} as Meta

const template: Story = (args) => <BlogPost {...args} />;

export const Basic = template.bind({});
Basic.args = {
    
};