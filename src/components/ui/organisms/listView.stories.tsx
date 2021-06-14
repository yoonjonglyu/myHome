import React from 'react';
import { Provider } from 'react-redux'
import { Story, Meta } from '@storybook/react';

import ListView from './listView';
import Store from '../../../store/configureStore';

export default {
    title: "개인블로그/Ui/Organisms/ListView",
    component: ListView,
    decorators: [(Story) => <Provider store={Store}><Story /></Provider>]
} as Meta

const template: Story = (args) => <ListView {...args} />;

export const Basic = template.bind({});
Basic.args = {

};