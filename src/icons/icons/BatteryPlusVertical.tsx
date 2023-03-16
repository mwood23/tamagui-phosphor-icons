import { useContext } from 'react'

import { BatteryPlusVerticalBold } from '../bold/battery-plus-vertical-bold'
import { BatteryPlusVerticalDuotone } from '../duotone/battery-plus-vertical-duotone'
import { BatteryPlusVerticalFill } from '../fill/battery-plus-vertical-fill'
import { BatteryPlusVerticalLight } from '../light/battery-plus-vertical-light'
import { BatteryPlusVerticalRegular } from '../regular/battery-plus-vertical-regular'
import { BatteryPlusVerticalThin } from '../thin/battery-plus-vertical-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BatteryPlusVerticalRegular,
  bold: BatteryPlusVerticalBold,
  duotone: BatteryPlusVerticalDuotone,
  fill: BatteryPlusVerticalFill,
  light: BatteryPlusVerticalLight,
  thin: BatteryPlusVerticalThin,
} as const

export const BatteryPlusVertical = (props: IconProps) => {
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
