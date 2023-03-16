import { useContext } from 'react'

import { ListMagnifyingGlassBold } from '../bold/list-magnifying-glass-bold'
import { ListMagnifyingGlassDuotone } from '../duotone/list-magnifying-glass-duotone'
import { ListMagnifyingGlassFill } from '../fill/list-magnifying-glass-fill'
import { ListMagnifyingGlassLight } from '../light/list-magnifying-glass-light'
import { ListMagnifyingGlassRegular } from '../regular/list-magnifying-glass-regular'
import { ListMagnifyingGlassThin } from '../thin/list-magnifying-glass-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ListMagnifyingGlassRegular,
  bold: ListMagnifyingGlassBold,
  duotone: ListMagnifyingGlassDuotone,
  fill: ListMagnifyingGlassFill,
  light: ListMagnifyingGlassLight,
  thin: ListMagnifyingGlassThin,
} as const

export const ListMagnifyingGlass = (props: IconProps) => {
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
