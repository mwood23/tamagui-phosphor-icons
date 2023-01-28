import { useContext } from 'react'

import { TriangleBold } from '../bold/triangle-bold'
import { TriangleDuotone } from '../duotone/triangle-duotone'
import { TriangleFill } from '../fill/triangle-fill'
import { TriangleLight } from '../light/triangle-light'
import { TriangleRegular } from '../regular/triangle-regular'
import { TriangleThin } from '../thin/triangle-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TriangleRegular,
  bold: TriangleBold,
  duotone: TriangleDuotone,
  fill: TriangleFill,
  light: TriangleLight,
  thin: TriangleThin,
} as const

export const Triangle = (props: IconProps) => {
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
