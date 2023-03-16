import { useContext } from 'react'

import { BatteryVerticalMediumBold } from '../bold/battery-vertical-medium-bold'
import { BatteryVerticalMediumDuotone } from '../duotone/battery-vertical-medium-duotone'
import { BatteryVerticalMediumFill } from '../fill/battery-vertical-medium-fill'
import { BatteryVerticalMediumLight } from '../light/battery-vertical-medium-light'
import { BatteryVerticalMediumRegular } from '../regular/battery-vertical-medium-regular'
import { BatteryVerticalMediumThin } from '../thin/battery-vertical-medium-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BatteryVerticalMediumRegular,
  bold: BatteryVerticalMediumBold,
  duotone: BatteryVerticalMediumDuotone,
  fill: BatteryVerticalMediumFill,
  light: BatteryVerticalMediumLight,
  thin: BatteryVerticalMediumThin,
} as const

export const BatteryVerticalMedium = (props: IconProps) => {
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
