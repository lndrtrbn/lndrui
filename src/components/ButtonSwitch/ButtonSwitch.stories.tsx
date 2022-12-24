import { Meta, Story } from "@storybook/react"
import ButtonSwitch, { ButtonSwitchProps } from "./ButtonSwitch"

export default {
  title: "Buttons/ButtonSwitch",
  component: ButtonSwitch,
} as Meta

const Template: Story<ButtonSwitchProps> = (args) => (
  <ButtonSwitch {...args} />
)

export const Default = Template.bind({})
Default.args = {
  leftLabel: "Left label",
  rightLabel: "Right label",
}

const VariantsTemplate: Story<ButtonSwitchProps> = () => (
  <>
    <div className="flex gap-x-16 items-center">
      <ButtonSwitch
        leftLabel="Primary"
        color="primary"
        value={true}
      />
      <ButtonSwitch
        leftLabel="Secondary"
        color="secondary"
        value={true}
      />
      <ButtonSwitch leftLabel="Danger" color="danger" value={true} />
    </div>
    <div className="flex gap-x-16 mt-16 items-center">
      <ButtonSwitch
        leftLabel="Primary off"
        color="primary"
        value={false}
      />
      <ButtonSwitch
        leftLabel="Secondary off"
        color="secondary"
        value={false}
      />
      <ButtonSwitch
        leftLabel="Danger off"
        color="danger"
        value={false}
      />
    </div>
    <div className="flex gap-x-16 mt-16 items-center">
      <ButtonSwitch
        leftLabel="Primary disabled"
        color="primary"
        value={true}
        disabled={true}
      />
      <ButtonSwitch
        leftLabel="Secondary disabled"
        color="secondary"
        value={true}
        disabled={true}
      />
      <ButtonSwitch
        leftLabel="Danger disabled"
        color="danger"
        value={true}
        disabled={true}
      />
    </div>
  </>
)

export const AllVariants = VariantsTemplate.bind({})
