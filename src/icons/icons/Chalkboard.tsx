import { useContext } from 'react'

import { ChalkboardBold } from '../bold/chalkboard-bold'
import { ChalkboardDuotone } from '../duotone/chalkboard-duotone'
import { ChalkboardFill } from '../fill/chalkboard-fill'
import { ChalkboardLight } from '../light/chalkboard-light'
import { ChalkboardRegular } from '../regular/chalkboard-regular'
import { ChalkboardThin } from '../thin/chalkboard-thin'
import { IconContext } from './IconContext'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChalkboardRegular,
  bold: ChalkboardBold,
  duotone: ChalkboardDuotone,
  fill: ChalkboardFill,
  light: ChalkboardLight,
  thin: ChalkboardThin,
} as const

export const Chalkboard = (props: IconProps) => {
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
