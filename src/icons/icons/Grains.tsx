import { useContext } from 'react'

import { GrainsBold } from '../bold/grains-bold'
import { GrainsDuotone } from '../duotone/grains-duotone'
import { GrainsFill } from '../fill/grains-fill'
import { GrainsLight } from '../light/grains-light'
import { GrainsRegular } from '../regular/grains-regular'
import { GrainsThin } from '../thin/grains-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GrainsRegular,
  bold: GrainsBold,
  duotone: GrainsDuotone,
  fill: GrainsFill,
  light: GrainsLight,
  thin: GrainsThin,
} as const

export const Grains = (props: IconProps) => {
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
