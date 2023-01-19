import { Meta, Story } from "@storybook/react"
import Button from "../Button/Button"
import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup"

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
} as Meta

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Button>Group</Button>
      <Button>Of</Button>
      <Button>Buttons</Button>
    </>
  ),
}

export const NotStacked = Template.bind({})
NotStacked.args = {
  ...Default.args,
  stacked: false,
}

const VariantsTemplate: Story<ButtonGroupProps> = () => (
  <div className="flex flex-col gap-y-16 items-center">
    <ButtonGroup>
      <Button>Group</Button>
      <Button>Of</Button>
      <Button>Buttons</Button>
      <Button>Stacked</Button>
    </ButtonGroup>
    <ButtonGroup stacked={false}>
      <Button>Using</Button>
      <Button>Not</Button>
      <Button>Stacked</Button>
      <Button>Buttons</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>Using</Button>
      <Button>Different</Button>
      <Button>Colors</Button>
      <Button color="danger">For</Button>
      <Button color="danger">Buttons</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="link">Home</Button>
      <Button variant="link">Articles</Button>
      <Button variant="link">Pages</Button>
      <Button variant="link">Profil</Button>
    </ButtonGroup>
  </div>
)

export const AllVariants = VariantsTemplate.bind({})
