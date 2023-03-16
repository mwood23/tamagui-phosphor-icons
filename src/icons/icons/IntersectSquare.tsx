import { useContext } from 'react'

import { IntersectSquareBold } from '../bold/intersect-square-bold'
import { IntersectSquareDuotone } from '../duotone/intersect-square-duotone'
import { IntersectSquareFill } from '../fill/intersect-square-fill'
import { IntersectSquareLight } from '../light/intersect-square-light'
import { IntersectSquareRegular } from '../regular/intersect-square-regular'
import { IntersectSquareThin } from '../thin/intersect-square-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: IntersectSquareRegular,
  bold: IntersectSquareBold,
  duotone: IntersectSquareDuotone,
  fill: IntersectSquareFill,
  light: IntersectSquareLight,
  thin: IntersectSquareThin,
} as const

export const IntersectSquare = (props: IconProps) => {
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
