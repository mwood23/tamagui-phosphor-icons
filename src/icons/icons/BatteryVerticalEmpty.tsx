import { useContext } from 'react'

import { BatteryVerticalEmptyBold } from '../bold/battery-vertical-empty-bold'
import { BatteryVerticalEmptyDuotone } from '../duotone/battery-vertical-empty-duotone'
import { BatteryVerticalEmptyFill } from '../fill/battery-vertical-empty-fill'
import { BatteryVerticalEmptyLight } from '../light/battery-vertical-empty-light'
import { BatteryVerticalEmptyRegular } from '../regular/battery-vertical-empty-regular'
import { BatteryVerticalEmptyThin } from '../thin/battery-vertical-empty-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BatteryVerticalEmptyRegular,
  bold: BatteryVerticalEmptyBold,
  duotone: BatteryVerticalEmptyDuotone,
  fill: BatteryVerticalEmptyFill,
  light: BatteryVerticalEmptyLight,
  thin: BatteryVerticalEmptyThin,
} as const

export const BatteryVerticalEmpty = (props: IconProps) => {
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
