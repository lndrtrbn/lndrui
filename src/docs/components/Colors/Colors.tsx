import { useState } from "react"
import { twMerge } from "tailwind-merge"

import style from "./Colors.style"

export type ColorsProps = {
  title: string
  values: Record<string, string>
}

export default function Colors({ title, values }: ColorsProps) {
  return (
    <div className={twMerge(style.base)}>
      <h3>{title}</h3>

      <div className={twMerge(style.container)}>
        {Object.entries(values).map(([key, value], index) => (
          <Color
            key={key}
            label={key}
            value={value}
            invert={index > 6}
          />
        ))}
      </div>
    </div>
  )
}

type ColorProps = {
  label: string
  value: string
  invert: boolean
}

function Color({ label, value, invert }: ColorProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{ background: value }}
      className={twMerge(
        style.item,
        open && style.open,
        invert && "text-font-invert"
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span>{label}</span>
      {open && (
        <>
          <span>{value}</span>
        </>
      )}
    </div>
  )
}
