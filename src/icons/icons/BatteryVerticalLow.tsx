import { useContext } from 'react'

import { BatteryVerticalLowBold } from '../bold/battery-vertical-low-bold'
import { BatteryVerticalLowDuotone } from '../duotone/battery-vertical-low-duotone'
import { BatteryVerticalLowFill } from '../fill/battery-vertical-low-fill'
import { BatteryVerticalLowLight } from '../light/battery-vertical-low-light'
import { BatteryVerticalLowRegular } from '../regular/battery-vertical-low-regular'
import { BatteryVerticalLowThin } from '../thin/battery-vertical-low-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BatteryVerticalLowRegular,
  bold: BatteryVerticalLowBold,
  duotone: BatteryVerticalLowDuotone,
  fill: BatteryVerticalLowFill,
  light: BatteryVerticalLowLight,
  thin: BatteryVerticalLowThin,
} as const

export const BatteryVerticalLow = (props: IconProps) => {
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
