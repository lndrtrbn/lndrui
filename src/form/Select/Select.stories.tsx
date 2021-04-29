import { Meta, Story } from "@storybook/react";
import Select, { SelectProps } from "./Select";

export default {
  title: "Form/Select",
  component: Select
} as Meta;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Choose a day",
  options: [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" }
  ]
}

export const LotOfOptions = Template.bind({});
LotOfOptions.args = {
  label: "Choose a day",
  options: [
    { label: "Monday", value: "1" },
    { label: "Tuesday", value: "2" },
    { label: "Wednesday", value: "3" },
    { label: "Monday", value: "4" },
    { label: "Tuesday", value: "5" },
    { label: "Wednesday", value: "6" },
    { label: "Monday", value: "7" },
    { label: "Tuesday", value: "8" },
    { label: "Wednesday", value: "9" },
    { label: "Monday", value: "10" }
  ]
}