import { useContext } from 'react'

import { ElevatorBold } from '../bold/elevator-bold'
import { ElevatorDuotone } from '../duotone/elevator-duotone'
import { ElevatorFill } from '../fill/elevator-fill'
import { ElevatorLight } from '../light/elevator-light'
import { ElevatorRegular } from '../regular/elevator-regular'
import { ElevatorThin } from '../thin/elevator-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ElevatorRegular,
  bold: ElevatorBold,
  duotone: ElevatorDuotone,
  fill: ElevatorFill,
  light: ElevatorLight,
  thin: ElevatorThin,
} as const

export const Elevator = (props: IconProps) => {
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
