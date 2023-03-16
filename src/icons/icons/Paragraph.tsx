import { useContext } from 'react'

import { ParagraphBold } from '../bold/paragraph-bold'
import { ParagraphDuotone } from '../duotone/paragraph-duotone'
import { ParagraphFill } from '../fill/paragraph-fill'
import { ParagraphLight } from '../light/paragraph-light'
import { ParagraphRegular } from '../regular/paragraph-regular'
import { ParagraphThin } from '../thin/paragraph-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ParagraphRegular,
  bold: ParagraphBold,
  duotone: ParagraphDuotone,
  fill: ParagraphFill,
  light: ParagraphLight,
  thin: ParagraphThin,
} as const

export const Paragraph = (props: IconProps) => {
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
