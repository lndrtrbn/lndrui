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
        leftLabel="Default"
        color="default"
        value={true}
      />
      <ButtonSwitch leftLabel="Danger" color="danger" value={true} />
    </div>
    <div className="flex gap-x-16 mt-16 items-center">
      <ButtonSwitch
        leftLabel="Default off"
        color="default"
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
        leftLabel="Default disabled"
        color="default"
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
