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

const inputTextStyle: InputTextStyle = {
  base: "px-16 h-40 border-2 rounded focus:outline outline-4 outline-primary/30",
  color: "bg-background-accent border-neutral/30 hover:border-primary focus:border-primary",
  container: "flex flex-col gap-8",
  disabled: {
    input: "opacity-40 bg-neutral/50",
    container: "pointer-events-none"
  },
  inError: "bg-background-accent border-danger outline-danger/30",
  label: "font-bold"
}

export default inputTextStyle