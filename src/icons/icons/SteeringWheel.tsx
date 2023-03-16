import { useContext } from 'react'

import { SteeringWheelBold } from '../bold/steering-wheel-bold'
import { SteeringWheelDuotone } from '../duotone/steering-wheel-duotone'
import { SteeringWheelFill } from '../fill/steering-wheel-fill'
import { SteeringWheelLight } from '../light/steering-wheel-light'
import { SteeringWheelRegular } from '../regular/steering-wheel-regular'
import { SteeringWheelThin } from '../thin/steering-wheel-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SteeringWheelRegular,
  bold: SteeringWheelBold,
  duotone: SteeringWheelDuotone,
  fill: SteeringWheelFill,
  light: SteeringWheelLight,
  thin: SteeringWheelThin,
} as const

export const SteeringWheel = (props: IconProps) => {
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
