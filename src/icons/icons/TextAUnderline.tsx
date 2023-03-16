import { useContext } from 'react'

import { TextAUnderlineBold } from '../bold/text-a-underline-bold'
import { TextAUnderlineDuotone } from '../duotone/text-a-underline-duotone'
import { TextAUnderlineFill } from '../fill/text-a-underline-fill'
import { TextAUnderlineLight } from '../light/text-a-underline-light'
import { TextAUnderlineRegular } from '../regular/text-a-underline-regular'
import { TextAUnderlineThin } from '../thin/text-a-underline-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TextAUnderlineRegular,
  bold: TextAUnderlineBold,
  duotone: TextAUnderlineDuotone,
  fill: TextAUnderlineFill,
  light: TextAUnderlineLight,
  thin: TextAUnderlineThin,
} as const

export const TextAUnderline = (props: IconProps) => {
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
