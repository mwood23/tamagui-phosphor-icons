import { useContext } from 'react'

import { WheelchairMotionBold } from '../bold/wheelchair-motion-bold'
import { WheelchairMotionDuotone } from '../duotone/wheelchair-motion-duotone'
import { WheelchairMotionFill } from '../fill/wheelchair-motion-fill'
import { WheelchairMotionLight } from '../light/wheelchair-motion-light'
import { WheelchairMotionRegular } from '../regular/wheelchair-motion-regular'
import { WheelchairMotionThin } from '../thin/wheelchair-motion-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: WheelchairMotionRegular,
  bold: WheelchairMotionBold,
  duotone: WheelchairMotionDuotone,
  fill: WheelchairMotionFill,
  light: WheelchairMotionLight,
  thin: WheelchairMotionThin,
} as const

export const WheelchairMotion = (props: IconProps) => {
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
