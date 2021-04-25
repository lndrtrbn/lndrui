import { Meta, Story } from "@storybook/react";
import Textarea, { TextareaProps } from "./Textarea";

export default {
  title: "Form/Textarea",
  component: Textarea
} as Meta;

const Template: Story<TextareaProps> = args => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "My content"
}

export const Transparent = Template.bind({});
Transparent.args = {
  value: "My content",
  style: "transparent"
}

export const InError = Template.bind({});
InError.args = {
  value: "My content",
  inError: true
}