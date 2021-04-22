import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Lndrui/Button",
  component: Button,
  argTypes: {
    label: {

    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Click me!"
}

export const Transparent = Template.bind({});
Transparent.args = {
  ...Default.args,
  transparent: true
}
