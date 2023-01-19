type TooltipStyle = {
  base: string
  container: string
  positioning: string
  wrapper: string
}

const style: TooltipStyle = {
  base: "bg-mb-d20 px-8 py-4 rounded text-font-invert dark:text-font dark:bg-mb-l40",
  container: "relative",
  positioning: "absolute top-full translate-y-8",
  wrapper: "relative left-1/2 -translate-x-1/2"
}

export default style