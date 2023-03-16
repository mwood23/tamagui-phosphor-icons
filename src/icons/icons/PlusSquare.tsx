import { useContext } from 'react'

import { PlusSquareBold } from '../bold/plus-square-bold'
import { PlusSquareDuotone } from '../duotone/plus-square-duotone'
import { PlusSquareFill } from '../fill/plus-square-fill'
import { PlusSquareLight } from '../light/plus-square-light'
import { PlusSquareRegular } from '../regular/plus-square-regular'
import { PlusSquareThin } from '../thin/plus-square-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PlusSquareRegular,
  bold: PlusSquareBold,
  duotone: PlusSquareDuotone,
  fill: PlusSquareFill,
  light: PlusSquareLight,
  thin: PlusSquareThin,
} as const

export const PlusSquare = (props: IconProps) => {
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
