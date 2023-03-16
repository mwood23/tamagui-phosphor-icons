import { useContext } from 'react'

import { StarOfDavidBold } from '../bold/star-of-david-bold'
import { StarOfDavidDuotone } from '../duotone/star-of-david-duotone'
import { StarOfDavidFill } from '../fill/star-of-david-fill'
import { StarOfDavidLight } from '../light/star-of-david-light'
import { StarOfDavidRegular } from '../regular/star-of-david-regular'
import { StarOfDavidThin } from '../thin/star-of-david-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: StarOfDavidRegular,
  bold: StarOfDavidBold,
  duotone: StarOfDavidDuotone,
  fill: StarOfDavidFill,
  light: StarOfDavidLight,
  thin: StarOfDavidThin,
} as const

export const StarOfDavid = (props: IconProps) => {
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
