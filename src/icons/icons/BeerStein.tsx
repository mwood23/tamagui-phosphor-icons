import { useContext } from 'react'

import { BeerSteinBold } from '../bold/beer-stein-bold'
import { BeerSteinDuotone } from '../duotone/beer-stein-duotone'
import { BeerSteinFill } from '../fill/beer-stein-fill'
import { BeerSteinLight } from '../light/beer-stein-light'
import { BeerSteinRegular } from '../regular/beer-stein-regular'
import { BeerSteinThin } from '../thin/beer-stein-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BeerSteinRegular,
  bold: BeerSteinBold,
  duotone: BeerSteinDuotone,
  fill: BeerSteinFill,
  light: BeerSteinLight,
  thin: BeerSteinThin,
} as const

export const BeerStein = (props: IconProps) => {
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
