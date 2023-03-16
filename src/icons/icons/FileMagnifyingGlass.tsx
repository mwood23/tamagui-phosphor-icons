import { useContext } from 'react'

import { FileMagnifyingGlassBold } from '../bold/file-magnifying-glass-bold'
import { FileMagnifyingGlassDuotone } from '../duotone/file-magnifying-glass-duotone'
import { FileMagnifyingGlassFill } from '../fill/file-magnifying-glass-fill'
import { FileMagnifyingGlassLight } from '../light/file-magnifying-glass-light'
import { FileMagnifyingGlassRegular } from '../regular/file-magnifying-glass-regular'
import { FileMagnifyingGlassThin } from '../thin/file-magnifying-glass-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FileMagnifyingGlassRegular,
  bold: FileMagnifyingGlassBold,
  duotone: FileMagnifyingGlassDuotone,
  fill: FileMagnifyingGlassFill,
  light: FileMagnifyingGlassLight,
  thin: FileMagnifyingGlassThin,
} as const

export const FileMagnifyingGlass = (props: IconProps) => {
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    style: contextStyle,
  } = useContext(IconContext)

  const {
    color = contextColor ?? 'black',
    size = contextSize ?? 24,
    weight = contextWeight ?? 'regular',
    style = contextStyle ?? {},
    ...otherProps
  } = props

  const Component = weightMap[weight]

  return (
    <Component
      color={color}
      size={size}
      weight={weight}
      style={style}
      {...otherProps}
    />
  )
}
