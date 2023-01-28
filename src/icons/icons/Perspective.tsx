import { useContext } from 'react'

import { PerspectiveBold } from '../bold/perspective-bold'
import { PerspectiveDuotone } from '../duotone/perspective-duotone'
import { PerspectiveFill } from '../fill/perspective-fill'
import { PerspectiveLight } from '../light/perspective-light'
import { PerspectiveRegular } from '../regular/perspective-regular'
import { PerspectiveThin } from '../thin/perspective-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PerspectiveRegular,
  bold: PerspectiveBold,
  duotone: PerspectiveDuotone,
  fill: PerspectiveFill,
  light: PerspectiveLight,
  thin: PerspectiveThin,
} as const

export const Perspective = (props: IconProps) => {
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
