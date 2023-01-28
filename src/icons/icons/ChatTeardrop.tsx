import { useContext } from 'react'

import { ChatTeardropBold } from '../bold/chat-teardrop-bold'
import { ChatTeardropDuotone } from '../duotone/chat-teardrop-duotone'
import { ChatTeardropFill } from '../fill/chat-teardrop-fill'
import { ChatTeardropLight } from '../light/chat-teardrop-light'
import { ChatTeardropRegular } from '../regular/chat-teardrop-regular'
import { ChatTeardropThin } from '../thin/chat-teardrop-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChatTeardropRegular,
  bold: ChatTeardropBold,
  duotone: ChatTeardropDuotone,
  fill: ChatTeardropFill,
  light: ChatTeardropLight,
  thin: ChatTeardropThin,
} as const

export const ChatTeardrop = (props: IconProps) => {
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
