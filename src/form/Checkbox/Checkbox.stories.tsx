import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Patates",
  checked: false
}

export const Checked = Template.bind({});
Checked.args = {
  children: "Patates",
  checked: true
}