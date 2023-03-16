import { useContext } from 'react'

import { StarAndCrescentBold } from '../bold/star-and-crescent-bold'
import { StarAndCrescentDuotone } from '../duotone/star-and-crescent-duotone'
import { StarAndCrescentFill } from '../fill/star-and-crescent-fill'
import { StarAndCrescentLight } from '../light/star-and-crescent-light'
import { StarAndCrescentRegular } from '../regular/star-and-crescent-regular'
import { StarAndCrescentThin } from '../thin/star-and-crescent-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: StarAndCrescentRegular,
  bold: StarAndCrescentBold,
  duotone: StarAndCrescentDuotone,
  fill: StarAndCrescentFill,
  light: StarAndCrescentLight,
  thin: StarAndCrescentThin,
} as const

export const StarAndCrescent = (props: IconProps) => {
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
