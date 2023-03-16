import { useContext } from 'react'

import { BookOpenTextBold } from '../bold/book-open-text-bold'
import { BookOpenTextDuotone } from '../duotone/book-open-text-duotone'
import { BookOpenTextFill } from '../fill/book-open-text-fill'
import { BookOpenTextLight } from '../light/book-open-text-light'
import { BookOpenTextRegular } from '../regular/book-open-text-regular'
import { BookOpenTextThin } from '../thin/book-open-text-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BookOpenTextRegular,
  bold: BookOpenTextBold,
  duotone: BookOpenTextDuotone,
  fill: BookOpenTextFill,
  light: BookOpenTextLight,
  thin: BookOpenTextThin,
} as const

export const BookOpenText = (props: IconProps) => {
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
