import { neutral } from "./neutral"
import { brickRed } from "./brickRed"
import { jungleGreen } from "./jungleGreen"
import { midnightBlue } from "./midnightBlue"

export const colors = {
  neutral,
  brickRed,
  jungleGreen,
  midnightBlue,

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
