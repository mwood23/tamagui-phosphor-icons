import { useContext } from 'react'

import { HandSwipeLeftBold } from '../bold/hand-swipe-left-bold'
import { HandSwipeLeftDuotone } from '../duotone/hand-swipe-left-duotone'
import { HandSwipeLeftFill } from '../fill/hand-swipe-left-fill'
import { HandSwipeLeftLight } from '../light/hand-swipe-left-light'
import { HandSwipeLeftRegular } from '../regular/hand-swipe-left-regular'
import { HandSwipeLeftThin } from '../thin/hand-swipe-left-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HandSwipeLeftRegular,
  bold: HandSwipeLeftBold,
  duotone: HandSwipeLeftDuotone,
  fill: HandSwipeLeftFill,
  light: HandSwipeLeftLight,
  thin: HandSwipeLeftThin,
} as const

export const HandSwipeLeft = (props: IconProps) => {
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
