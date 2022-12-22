import { Meta, Story } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

export default {
  title: "Buttons/Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Click me!",
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
}

export const Danger = Template.bind({})
Danger.args = {
  ...Primary.args,
  variant: "danger",
}
