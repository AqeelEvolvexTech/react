import type { SVGProps } from 'react'

const modules = import.meta.glob<React.FC<SVGProps<SVGSVGElement>>>('@/**/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
})

const icons = Object.entries(modules).reduce<Record<string, React.FC<SVGProps<SVGSVGElement>>>>((acc, [path, component]) => {
  const parts = path.split('/')
  const fileName = parts.pop()?.replace('.svg', '') ?? ''
  const folder = parts.pop() ?? ''
  const fullName = folder ? `${folder}/${fileName}` : fileName
  acc[fullName] = component
  acc[fileName] = component
  return acc
}, {})

export type IconName = keyof typeof icons

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
}

export const Icon = ({ name, ...props }: IconProps) => {
  const SvgIcon = icons[name]

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <SvgIcon {...props} />
}

export default Icon
