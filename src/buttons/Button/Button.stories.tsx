import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Buttons/Button",
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me!"
}

export const IconButton = Template.bind({});
IconButton.args = {
  children: (
    <svg width="20" height="10">
      <rect width="20" height="10" />
    </svg>
  )
}

export const Transparent = Template.bind({});
Transparent.args = {
  ...Default.args,
  style: "transparent"
}

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  style: "success"
}

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  style: "danger"
}
