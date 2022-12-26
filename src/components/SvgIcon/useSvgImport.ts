import { useEffect, useRef, useState } from "react"

export type SvgName =
  | "boussole"
  | "text_center"
  | "text_justify"
  | "text_left"

export function useSvgImport(svgName: SvgName) {
  const importedSvgRef =
    useRef<React.FC<React.SVGProps<SVGElement>>>()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setLoading(true)
    const importSvgIcon = async (): Promise<void> => {
      try {
        importedSvgRef.current = (
          await import(`../../assets/icons/${svgName}.svg`)
        ).ReactComponent
      } catch (err) {
        setError(err)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    importSvgIcon()
  }, [svgName])

  return { error, loading, Svg: importedSvgRef.current }
}
