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
  base: "transition-all px-16 h-40 border-2 rounded focus:outline outline-4 outline-primary-alt3",
  color: "bg-background-alt border-neutral-alt3 hover:border-primary focus:border-primary focus-",
  container: "flex flex-col gap-8",
  disabled: {
    input: "opacity-40 bg-neutral-alt3",
    container: "pointer-events-none"
  },
  inError: "bg-background-alt border-danger outline-danger-alt3",
  label: "font-bold"
}

export default inputTextStyle