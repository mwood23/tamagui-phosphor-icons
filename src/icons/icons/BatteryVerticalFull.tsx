import { useContext } from 'react'

import { BatteryVerticalFullBold } from '../bold/battery-vertical-full-bold'
import { BatteryVerticalFullDuotone } from '../duotone/battery-vertical-full-duotone'
import { BatteryVerticalFullFill } from '../fill/battery-vertical-full-fill'
import { BatteryVerticalFullLight } from '../light/battery-vertical-full-light'
import { BatteryVerticalFullRegular } from '../regular/battery-vertical-full-regular'
import { BatteryVerticalFullThin } from '../thin/battery-vertical-full-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BatteryVerticalFullRegular,
  bold: BatteryVerticalFullBold,
  duotone: BatteryVerticalFullDuotone,
  fill: BatteryVerticalFullFill,
  light: BatteryVerticalFullLight,
  thin: BatteryVerticalFullThin,
} as const

export const BatteryVerticalFull = (props: IconProps) => {
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
