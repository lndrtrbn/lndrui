import { neutral } from "./neutral"
import { br } from "./brickRed"
import { jg } from "./jungleGreen"
import { mb } from "./midnightBlue"

export const colors = {
  neutral,
  br,
  jg,
  mb,

  transparent: "transparent",

  background: {
    DEFAULT: neutral.l90,
    accent: neutral.l100,
  },
  font: {
    DEFAULT: neutral.d80,
    invert: neutral.l100,
  },
}
