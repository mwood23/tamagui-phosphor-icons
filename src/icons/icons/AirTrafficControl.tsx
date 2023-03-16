import { useContext } from 'react'

import { AirTrafficControlBold } from '../bold/air-traffic-control-bold'
import { AirTrafficControlDuotone } from '../duotone/air-traffic-control-duotone'
import { AirTrafficControlFill } from '../fill/air-traffic-control-fill'
import { AirTrafficControlLight } from '../light/air-traffic-control-light'
import { AirTrafficControlRegular } from '../regular/air-traffic-control-regular'
import { AirTrafficControlThin } from '../thin/air-traffic-control-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: AirTrafficControlRegular,
  bold: AirTrafficControlBold,
  duotone: AirTrafficControlDuotone,
  fill: AirTrafficControlFill,
  light: AirTrafficControlLight,
  thin: AirTrafficControlThin,
} as const

export const AirTrafficControl = (props: IconProps) => {
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
