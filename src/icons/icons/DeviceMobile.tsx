import { useContext } from 'react'

import { DeviceMobileBold } from '../bold/device-mobile-bold'
import { DeviceMobileDuotone } from '../duotone/device-mobile-duotone'
import { DeviceMobileFill } from '../fill/device-mobile-fill'
import { DeviceMobileLight } from '../light/device-mobile-light'
import { DeviceMobileRegular } from '../regular/device-mobile-regular'
import { DeviceMobileThin } from '../thin/device-mobile-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DeviceMobileRegular,
  bold: DeviceMobileBold,
  duotone: DeviceMobileDuotone,
  fill: DeviceMobileFill,
  light: DeviceMobileLight,
  thin: DeviceMobileThin,
} as const

export const DeviceMobile = (props: IconProps) => {
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
