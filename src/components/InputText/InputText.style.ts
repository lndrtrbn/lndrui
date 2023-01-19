type InputTextStyle = {
  base: string
  color: string
  container: string
  disabled: {
    input: string
    container: string
  }
  inError: string
  label: string
}

const style: InputTextStyle = {
  base: "px-16 h-40 border-2 rounded focus:outline outline-4 outline-jg/30 dark:outline-jg/40 dark:text-font-invert",
  color: "bg-background-accent border-neutral/30 hover:border-jg focus:border-jg dark:bg-mb-d60",
  container: "flex flex-col gap-8",
  disabled: {
    input: "opacity-40 bg-neutral/50 dark:bg-mb-d60",
    container: "pointer-events-none"
  },
  inError: "bg-background-accent border-br outline-br/30 dark:bg-mb-d60 dark:outline-br/40",
  label: "font-bold dark:text-font-invert"
}

export default style