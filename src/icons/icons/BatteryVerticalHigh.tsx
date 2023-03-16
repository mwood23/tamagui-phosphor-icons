import { useContext } from 'react'

import { BatteryVerticalHighBold } from '../bold/battery-vertical-high-bold'
import { BatteryVerticalHighDuotone } from '../duotone/battery-vertical-high-duotone'
import { BatteryVerticalHighFill } from '../fill/battery-vertical-high-fill'
import { BatteryVerticalHighLight } from '../light/battery-vertical-high-light'
import { BatteryVerticalHighRegular } from '../regular/battery-vertical-high-regular'
import { BatteryVerticalHighThin } from '../thin/battery-vertical-high-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BatteryVerticalHighRegular,
  bold: BatteryVerticalHighBold,
  duotone: BatteryVerticalHighDuotone,
  fill: BatteryVerticalHighFill,
  light: BatteryVerticalHighLight,
  thin: BatteryVerticalHighThin,
} as const

export const BatteryVerticalHigh = (props: IconProps) => {
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
