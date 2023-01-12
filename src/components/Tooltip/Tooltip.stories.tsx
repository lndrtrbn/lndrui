import { Meta, Story } from "@storybook/react"

import Button from "../Button/Button"
import Tooltip, { TooltipProps } from "./Tooltip"

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Super tooltip",
  children: <Button>Default</Button>,
}
