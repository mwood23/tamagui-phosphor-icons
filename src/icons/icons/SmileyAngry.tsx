import { useContext } from 'react'

import { SmileyAngryBold } from '../bold/smiley-angry-bold'
import { SmileyAngryDuotone } from '../duotone/smiley-angry-duotone'
import { SmileyAngryFill } from '../fill/smiley-angry-fill'
import { SmileyAngryLight } from '../light/smiley-angry-light'
import { SmileyAngryRegular } from '../regular/smiley-angry-regular'
import { SmileyAngryThin } from '../thin/smiley-angry-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SmileyAngryRegular,
  bold: SmileyAngryBold,
  duotone: SmileyAngryDuotone,
  fill: SmileyAngryFill,
  light: SmileyAngryLight,
  thin: SmileyAngryThin,
} as const

export const SmileyAngry = (props: IconProps) => {
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
