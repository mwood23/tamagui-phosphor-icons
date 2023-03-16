import { useContext } from 'react'

import { HandHeartBold } from '../bold/hand-heart-bold'
import { HandHeartDuotone } from '../duotone/hand-heart-duotone'
import { HandHeartFill } from '../fill/hand-heart-fill'
import { HandHeartLight } from '../light/hand-heart-light'
import { HandHeartRegular } from '../regular/hand-heart-regular'
import { HandHeartThin } from '../thin/hand-heart-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HandHeartRegular,
  bold: HandHeartBold,
  duotone: HandHeartDuotone,
  fill: HandHeartFill,
  light: HandHeartLight,
  thin: HandHeartThin,
} as const

export const HandHeart = (props: IconProps) => {
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
