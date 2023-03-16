import { useContext } from 'react'

import { PulseBold } from '../bold/pulse-bold'
import { PulseDuotone } from '../duotone/pulse-duotone'
import { PulseFill } from '../fill/pulse-fill'
import { PulseLight } from '../light/pulse-light'
import { PulseRegular } from '../regular/pulse-regular'
import { PulseThin } from '../thin/pulse-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PulseRegular,
  bold: PulseBold,
  duotone: PulseDuotone,
  fill: PulseFill,
  light: PulseLight,
  thin: PulseThin,
} as const

export const Pulse = (props: IconProps) => {
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
