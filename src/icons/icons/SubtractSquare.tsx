import { useContext } from 'react'

import { SubtractSquareBold } from '../bold/subtract-square-bold'
import { SubtractSquareDuotone } from '../duotone/subtract-square-duotone'
import { SubtractSquareFill } from '../fill/subtract-square-fill'
import { SubtractSquareLight } from '../light/subtract-square-light'
import { SubtractSquareRegular } from '../regular/subtract-square-regular'
import { SubtractSquareThin } from '../thin/subtract-square-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SubtractSquareRegular,
  bold: SubtractSquareBold,
  duotone: SubtractSquareDuotone,
  fill: SubtractSquareFill,
  light: SubtractSquareLight,
  thin: SubtractSquareThin,
} as const

export const SubtractSquare = (props: IconProps) => {
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
