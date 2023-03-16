import { useContext } from 'react'

import { CarrotBold } from '../bold/carrot-bold'
import { CarrotDuotone } from '../duotone/carrot-duotone'
import { CarrotFill } from '../fill/carrot-fill'
import { CarrotLight } from '../light/carrot-light'
import { CarrotRegular } from '../regular/carrot-regular'
import { CarrotThin } from '../thin/carrot-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CarrotRegular,
  bold: CarrotBold,
  duotone: CarrotDuotone,
  fill: CarrotFill,
  light: CarrotLight,
  thin: CarrotThin,
} as const

export const Carrot = (props: IconProps) => {
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
