import { Meta, Story } from "@storybook/react"
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
    </div>
  </>
)

export const AllVariants = VariantsTemplate.bind({})
