import { Meta, Story } from "@storybook/react"

import SvgIcon, { SvgIconProps } from "../SvgIcon/SvgIcon"

export default {
  title: "Data Display/SvgIcon",
  component: SvgIcon,
} as Meta

const Template: Story<SvgIconProps> = (args) => <SvgIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  name: "boussole",
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  name: "boussole",
  size: 32,
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  name: "boussole",
  size: 32,
  style: "fill-primary hover:fill-danger",
}
