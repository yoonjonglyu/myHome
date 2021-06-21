import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProfileTimeLine, ProfileTimeLineProps } from './profileTimeLine';

export default {
    title: "개인블로그/About/ProfileTimeLine",
    component: ProfileTimeLine
} as Meta

const template: Story<ProfileTimeLineProps> = (args) => <ProfileTimeLine {...args} />;

export const Basic = template.bind({});
Basic.args = {

};