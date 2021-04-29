import { Meta, Story } from "@storybook/react";
import Alert, { AlertProps } from "./Alert";

export default {
  title: "Layout/Alert",
  component: Alert
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const AlertInfo = Template.bind({});
AlertInfo.args = {
  content: "I'm an info alert!"
}

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
  content: "I'm a success alert!",
  type: "success"
}

export const AlertWarning = Template.bind({});
AlertWarning.args = {
  content: "I'm a warning alert!",
  type: "warning"
}

export const AlertDanger = Template.bind({});
AlertDanger.args = {
  content: "I'm a danger alert!",
  type: "danger"
}