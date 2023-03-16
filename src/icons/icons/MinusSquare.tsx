import { useContext } from 'react'

import { MinusSquareBold } from '../bold/minus-square-bold'
import { MinusSquareDuotone } from '../duotone/minus-square-duotone'
import { MinusSquareFill } from '../fill/minus-square-fill'
import { MinusSquareLight } from '../light/minus-square-light'
import { MinusSquareRegular } from '../regular/minus-square-regular'
import { MinusSquareThin } from '../thin/minus-square-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MinusSquareRegular,
  bold: MinusSquareBold,
  duotone: MinusSquareDuotone,
  fill: MinusSquareFill,
  light: MinusSquareLight,
  thin: MinusSquareThin,
} as const

export const MinusSquare = (props: IconProps) => {
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
