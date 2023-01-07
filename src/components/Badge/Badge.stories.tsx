import { Meta, Story } from "@storybook/react"
import Button from "../Button/Button"

import Badge, { BadgeProps } from "./Badge"

export default {
  title: "Data Display/Badge",
  component: Badge,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 0,
  color: "secondary",
  children: <Button>Default</Button>,
}

export const MaxValue = Template.bind({})
MaxValue.args = {
  color: "danger",
  value: 102,
  maxValue: 99,
  children: <Button>Max Value at 99</Button>,
}

export const NoValue = Template.bind({})
NoValue.args = {
  color: "danger",
  children: <Button>As notification</Button>,
}

const VariantsTemplate: Story<BadgeProps> = () => (
  <>
    <div className="flex gap-x-16">
      <Badge color="primary" value={8}>
        <Button color="secondary">Primary</Button>
      </Badge>
      <Badge color="secondary" value={8}>
        <Button color="primary">Secondary</Button>
      </Badge>
      <Badge color="danger" value={8}>
        <Button color="primary">Danger</Button>
      </Badge>
      <Badge color="danger">
        <Button color="primary">Notification</Button>
      </Badge>
    </div>
  </>
)

export const AllVariants = VariantsTemplate.bind({})
AllVariants.parameters = {
  controls: { hideNoControlsWarning: true },
}
