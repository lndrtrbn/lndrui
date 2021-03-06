import { Meta, Story } from "@storybook/react";
import InputText, { InputTextProps } from "./InputText";

export default {
  title: "Form/Input Text",
  component: InputText
} as Meta;

const Template: Story<InputTextProps> = args => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your name",
  value: ""
}

export const WithValue = Template.bind({});
WithValue.args = {
  ...Default.args,
  value: "Hernandez"
}

export const transparent = Template.bind({});
transparent.args = {
  ...WithValue.args,
  style: "transparent"
}

export const InError = Template.bind({});
InError.args = {
  ...WithValue.args,
  inError: true
}