import * as React from 'react';
import Logo from './STYLiSH-Logo';

export default {
  title: 'STYLiSH/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoPicture:
    'https://cdn.discordapp.com/attachments/1015532616969105419/1019825483803799573/logo.png',
};