import { Color } from "../../utils/color.type"

type ButtonSwitchStyle = {
  container: string
  disabled: string
  switch: {
    base: string
    active: Record<Color, string>
    inactive: string
  }
  switchValue: {
    base: string
    active: Record<Color, string>
    inactive: Record<Color, string>
  }
}

const style: ButtonSwitchStyle = {
  container: "flex gap-8 items-center dark:text-font-invert",
  disabled: "pointer-events-none opacity-50",
  switch: {
    base: "relative w-40 h-24 rounded-full",
    active: {
      default: "bg-jg/50",
      danger: "bg-br/50"
    },
    inactive: "bg-neutral/50"
  },
  switchValue: {
    base: "absolute top-4 w-16 h-16 rounded-full active:outline outline-4",
    active: {
      default: "bg-jg-d20 right-4 outline-jg/50 dark:bg-jg",
      danger: "bg-br-d20 right-4 outline-br/50 dark:bg-br"
    },
    inactive: {
      default: "bg-neutral-d20 left-4 outline-neutral/50 dark:bg-neutral",
      danger: "bg-neutral-d20 left-4 outline-neutral/50 dark:bg-neutral"
    }
  }
}

export default style