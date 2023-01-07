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
  container: "flex gap-8 items-center",
  disabled: "pointer-events-none opacity-50",
  switch: {
    base: "relative w-40 h-24 rounded-full",
    active: {
      primary: "bg-primary/50",
      secondary: "bg-secondary/50",
      danger: "bg-danger/50"
    },
    inactive: "bg-grey/50"
  },
  switchValue: {
    base: "absolute top-4 w-16 h-16 rounded-full active:outline outline-4",
    active: {
      primary: "bg-primary right-4 hover:bg-primary-accent outline-primary/30",
      secondary: "bg-secondary right-4 hover:bg-secondary-accent outline-secondary/30",
      danger: "bg-danger right-4 hover:bg-danger-accent outline-danger/30"
    },
    inactive: {
      primary: "bg-grey-accent left-4 hover:bg-primary-accent outline-primary/30",
      secondary: "bg-grey-accent left-4 hover:bg-secondary-accent outline-secondary/30",
      danger: "bg-grey-accent left-4 hover:bg-danger-accent outline-danger/30"
    }
  }
}

export default style