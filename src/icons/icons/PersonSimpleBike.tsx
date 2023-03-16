import { useContext } from 'react'

import { PersonSimpleBikeBold } from '../bold/person-simple-bike-bold'
import { PersonSimpleBikeDuotone } from '../duotone/person-simple-bike-duotone'
import { PersonSimpleBikeFill } from '../fill/person-simple-bike-fill'
import { PersonSimpleBikeLight } from '../light/person-simple-bike-light'
import { PersonSimpleBikeRegular } from '../regular/person-simple-bike-regular'
import { PersonSimpleBikeThin } from '../thin/person-simple-bike-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PersonSimpleBikeRegular,
  bold: PersonSimpleBikeBold,
  duotone: PersonSimpleBikeDuotone,
  fill: PersonSimpleBikeFill,
  light: PersonSimpleBikeLight,
  thin: PersonSimpleBikeThin,
} as const

export const PersonSimpleBike = (props: IconProps) => {
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
