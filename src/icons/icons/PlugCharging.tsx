import { useContext } from 'react'

import { PlugChargingBold } from '../bold/plug-charging-bold'
import { PlugChargingDuotone } from '../duotone/plug-charging-duotone'
import { PlugChargingFill } from '../fill/plug-charging-fill'
import { PlugChargingLight } from '../light/plug-charging-light'
import { PlugChargingRegular } from '../regular/plug-charging-regular'
import { PlugChargingThin } from '../thin/plug-charging-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PlugChargingRegular,
  bold: PlugChargingBold,
  duotone: PlugChargingDuotone,
  fill: PlugChargingFill,
  light: PlugChargingLight,
  thin: PlugChargingThin,
} as const

export const PlugCharging = (props: IconProps) => {
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
