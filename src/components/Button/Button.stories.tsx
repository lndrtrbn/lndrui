import { Meta, Story } from "@storybook/react"

import SvgIcon from "../SvgIcon/SvgIcon"
import Button, { ButtonProps } from "./Button"

export default {
  title: "Buttons/Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Click me!",
}

export const AsIconButton = Template.bind({})
AsIconButton.args = {
  asIcon: true,
  children: <SvgIcon name="boussole" size={24} />,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: (
    <>
      <SvgIcon name="boussole" size={24} />
      Where am I
    </>
  ),
}

const VariantsTemplate: Story<ButtonProps> = () => (
  <>
    <div className="flex gap-x-16">
      <Button variant="plain" color="primary">
        Primary
      </Button>
      <Button variant="plain" color="secondary">
        Secondary
      </Button>
      <Button variant="plain" color="danger">
        Danger
      </Button>
      <Button variant="plain" disabled>
        Disabled
      </Button>
    </div>
    <div className="flex gap-x-16 mt-16">
      <Button variant="link" color="primary">
        Primary
      </Button>
      <Button variant="link" color="secondary">
        Secondary
      </Button>
      <Button variant="link" color="danger">
        Danger
      </Button>
      <Button variant="link" disabled>
        Disabled
      </Button>
    </div>
  </>
)

export const AllVariants = VariantsTemplate.bind({})
