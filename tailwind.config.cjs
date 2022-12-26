const sizes = {
  0: "0px",
  2: "2px",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  64: "64px",
  80: "80px",
  96: "96px",
  112: "112px",
  128: "128px"
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      "primary-accent": "rgb(var(--color-primary-accent) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      "secondary-accent": "rgb(var(--color-secondary-accent) / <alpha-value>)",
      neutral: "rgb(var(--color-neutral) / <alpha-value>)",
      "neutral-accent": "rgb(var(--color-neutral-accent) / <alpha-value>)",
      danger: "rgb(var(--color-danger) / <alpha-value>)",
      "danger-accent": "rgb(var(--color-danger-accent) / <alpha-value>)",
      grey: "rgb(var(--color-grey) / <alpha-value>)",
      "grey-accent": "rgb(var(--color-grey-accent) / <alpha-value>)",
      background: "rgb(var(--color-background) / <alpha-value>)",
      "background-accent": "rgb(var(--color-background-accent) / <alpha-value>)",
      font: "rgb(var(--color-font) / <alpha-value>)",
      "font-invert": "rgb(var(--color-font-invert) / <alpha-value>)",
    },
    spacing: sizes,
    minWidth: sizes,
    minHeight: sizes,
  },
  plugins: [],
}
