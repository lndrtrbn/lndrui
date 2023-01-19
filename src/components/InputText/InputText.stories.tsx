import { Meta, Story } from "@storybook/react"
import { useState } from "react"
import InputText, { InputTextProps } from "./InputText"

export default {
  title: "Forms/InputText",
  component: InputText,
} as Meta

const Template: Story<InputTextProps> = (args) => {
  const [val, setVal] = useState(args.value)
  return <InputText {...args} value={val} onChange={setVal} />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: "Jean Mich",
  value: "",
  label: "Your name",
}

const VariantsTemplate: Story<InputTextProps> = () => (
  <>
    <div className="flex gap-x-16 items-end">
      <InputText label="Default" placeholder="Jean Mich" />
      <InputText label="With value" value="Anne" />
      <InputText value="Without label" />
    </div>
    <div className="flex gap-x-16 items-end mt-16">
      <InputText label="Password" value="azerty" type="password" />
      <InputText value="aa" label="In error" inError />
      <InputText label="Disabled" value="Disabled" disabled />
    </div>
  </>
)

export const AllVariants = VariantsTemplate.bind({})
