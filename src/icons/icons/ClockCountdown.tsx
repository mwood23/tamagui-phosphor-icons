import { useContext } from 'react'

import { ClockCountdownBold } from '../bold/clock-countdown-bold'
import { ClockCountdownDuotone } from '../duotone/clock-countdown-duotone'
import { ClockCountdownFill } from '../fill/clock-countdown-fill'
import { ClockCountdownLight } from '../light/clock-countdown-light'
import { ClockCountdownRegular } from '../regular/clock-countdown-regular'
import { ClockCountdownThin } from '../thin/clock-countdown-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ClockCountdownRegular,
  bold: ClockCountdownBold,
  duotone: ClockCountdownDuotone,
  fill: ClockCountdownFill,
  light: ClockCountdownLight,
  thin: ClockCountdownThin,
} as const

export const ClockCountdown = (props: IconProps) => {
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
