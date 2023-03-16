import { useContext } from 'react'

import { UsbBold } from '../bold/usb-bold'
import { UsbDuotone } from '../duotone/usb-duotone'
import { UsbFill } from '../fill/usb-fill'
import { UsbLight } from '../light/usb-light'
import { UsbRegular } from '../regular/usb-regular'
import { UsbThin } from '../thin/usb-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: UsbRegular,
  bold: UsbBold,
  duotone: UsbDuotone,
  fill: UsbFill,
  light: UsbLight,
  thin: UsbThin,
} as const

export const Usb = (props: IconProps) => {
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
