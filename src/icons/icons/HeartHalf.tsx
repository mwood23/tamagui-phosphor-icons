import { useContext } from 'react'

import { HeartHalfBold } from '../bold/heart-half-bold'
import { HeartHalfDuotone } from '../duotone/heart-half-duotone'
import { HeartHalfFill } from '../fill/heart-half-fill'
import { HeartHalfLight } from '../light/heart-half-light'
import { HeartHalfRegular } from '../regular/heart-half-regular'
import { HeartHalfThin } from '../thin/heart-half-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HeartHalfRegular,
  bold: HeartHalfBold,
  duotone: HeartHalfDuotone,
  fill: HeartHalfFill,
  light: HeartHalfLight,
  thin: HeartHalfThin,
} as const

export const HeartHalf = (props: IconProps) => {
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
