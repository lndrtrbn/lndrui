type ColorStyle = {
  base: string
  container: string
  item: string
  open: string
}

const style: ColorStyle = {
  base: "w-2/3",
  container: "border-2 overflow-hidden flex",
  item: "px-8 py-8 flex-1 h-64 flex flex-col justify-between font-bold",
  open: "flex-none w-112"
}

export default style