import { useContext } from 'react'

import { HandSwipeRightBold } from '../bold/hand-swipe-right-bold'
import { HandSwipeRightDuotone } from '../duotone/hand-swipe-right-duotone'
import { HandSwipeRightFill } from '../fill/hand-swipe-right-fill'
import { HandSwipeRightLight } from '../light/hand-swipe-right-light'
import { HandSwipeRightRegular } from '../regular/hand-swipe-right-regular'
import { HandSwipeRightThin } from '../thin/hand-swipe-right-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HandSwipeRightRegular,
  bold: HandSwipeRightBold,
  duotone: HandSwipeRightDuotone,
  fill: HandSwipeRightFill,
  light: HandSwipeRightLight,
  thin: HandSwipeRightThin,
} as const

export const HandSwipeRight = (props: IconProps) => {
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
