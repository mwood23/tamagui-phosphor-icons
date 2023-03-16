import { useContext } from 'react'

import { NotchesBold } from '../bold/notches-bold'
import { NotchesDuotone } from '../duotone/notches-duotone'
import { NotchesFill } from '../fill/notches-fill'
import { NotchesLight } from '../light/notches-light'
import { NotchesRegular } from '../regular/notches-regular'
import { NotchesThin } from '../thin/notches-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: NotchesRegular,
  bold: NotchesBold,
  duotone: NotchesDuotone,
  fill: NotchesFill,
  light: NotchesLight,
  thin: NotchesThin,
} as const

export const Notches = (props: IconProps) => {
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
