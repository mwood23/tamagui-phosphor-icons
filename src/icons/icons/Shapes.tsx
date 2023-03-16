import { useContext } from 'react'

import { ShapesBold } from '../bold/shapes-bold'
import { ShapesDuotone } from '../duotone/shapes-duotone'
import { ShapesFill } from '../fill/shapes-fill'
import { ShapesLight } from '../light/shapes-light'
import { ShapesRegular } from '../regular/shapes-regular'
import { ShapesThin } from '../thin/shapes-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ShapesRegular,
  bold: ShapesBold,
  duotone: ShapesDuotone,
  fill: ShapesFill,
  light: ShapesLight,
  thin: ShapesThin,
} as const

export const Shapes = (props: IconProps) => {
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
