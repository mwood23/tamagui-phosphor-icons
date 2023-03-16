import { useContext } from 'react'

import { MotorcycleBold } from '../bold/motorcycle-bold'
import { MotorcycleDuotone } from '../duotone/motorcycle-duotone'
import { MotorcycleFill } from '../fill/motorcycle-fill'
import { MotorcycleLight } from '../light/motorcycle-light'
import { MotorcycleRegular } from '../regular/motorcycle-regular'
import { MotorcycleThin } from '../thin/motorcycle-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MotorcycleRegular,
  bold: MotorcycleBold,
  duotone: MotorcycleDuotone,
  fill: MotorcycleFill,
  light: MotorcycleLight,
  thin: MotorcycleThin,
} as const

export const Motorcycle = (props: IconProps) => {
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
