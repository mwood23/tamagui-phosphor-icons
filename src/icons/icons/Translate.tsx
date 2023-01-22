import { useContext } from 'react'

import { TranslateBold } from '../bold/translate-bold'
import { TranslateDuotone } from '../duotone/translate-duotone'
import { TranslateFill } from '../fill/translate-fill'
import { TranslateLight } from '../light/translate-light'
import { TranslateRegular } from '../regular/translate-regular'
import { TranslateThin } from '../thin/translate-thin'
import { IconContext } from './IconContext'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TranslateRegular,
  bold: TranslateBold,
  duotone: TranslateDuotone,
  fill: TranslateFill,
  light: TranslateLight,
  thin: TranslateThin,
} as const

export const Translate = (props: IconProps) => {
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
