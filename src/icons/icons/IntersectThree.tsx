import { useContext } from 'react'

import { IntersectThreeBold } from '../bold/intersect-three-bold'
import { IntersectThreeDuotone } from '../duotone/intersect-three-duotone'
import { IntersectThreeFill } from '../fill/intersect-three-fill'
import { IntersectThreeLight } from '../light/intersect-three-light'
import { IntersectThreeRegular } from '../regular/intersect-three-regular'
import { IntersectThreeThin } from '../thin/intersect-three-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: IntersectThreeRegular,
  bold: IntersectThreeBold,
  duotone: IntersectThreeDuotone,
  fill: IntersectThreeFill,
  light: IntersectThreeLight,
  thin: IntersectThreeThin,
} as const

export const IntersectThree = (props: IconProps) => {
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
