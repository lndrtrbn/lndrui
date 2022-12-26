import { SvgName, useSvgImport } from "./useSvgImport"

type SvgSize = 12 | 16 | 20 | 24 | 28 | 32

export type SvgIconProps = {
  name: SvgName
  style?: string
  size?: SvgSize
}

export default function SvgIcon({
  name,
  style,
  size = 24,
}: SvgIconProps) {
  const { loading, Svg } = useSvgImport(name)

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8" />
      )}
      {Svg && <Svg className={style} width={size} height={size} />}
    </>
  )
}
