import { useContext } from 'react'

import { DevicesBold } from '../bold/devices-bold'
import { DevicesDuotone } from '../duotone/devices-duotone'
import { DevicesFill } from '../fill/devices-fill'
import { DevicesLight } from '../light/devices-light'
import { DevicesRegular } from '../regular/devices-regular'
import { DevicesThin } from '../thin/devices-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DevicesRegular,
  bold: DevicesBold,
  duotone: DevicesDuotone,
  fill: DevicesFill,
  light: DevicesLight,
  thin: DevicesThin,
} as const

export const Devices = (props: IconProps) => {
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
