import { Meta, Story } from "@storybook/react";
import Title, { TitleProps } from "./Title";

export default {
  title: "Layout/Title",
  component: Title
} as Meta;

const Template: Story<TitleProps> = args => <Title {...args} />;

export const Title1 = Template.bind({});
Title1.args = {
  value: "Header 1",
  level: "2"
}

export const Title2 = Template.bind({});
Title2.args = {
  value: "Header 2",
  level: "2"
}

export const Title3 = Template.bind({});
Title3.args = {
  value: "Header 3",
  level: "3"
}

export const Title4 = Template.bind({});
Title4.args = {
  value: "Header 4",
  level: "4"
}