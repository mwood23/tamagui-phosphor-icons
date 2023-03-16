import { useContext } from 'react'

import { UniteSquareBold } from '../bold/unite-square-bold'
import { UniteSquareDuotone } from '../duotone/unite-square-duotone'
import { UniteSquareFill } from '../fill/unite-square-fill'
import { UniteSquareLight } from '../light/unite-square-light'
import { UniteSquareRegular } from '../regular/unite-square-regular'
import { UniteSquareThin } from '../thin/unite-square-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: UniteSquareRegular,
  bold: UniteSquareBold,
  duotone: UniteSquareDuotone,
  fill: UniteSquareFill,
  light: UniteSquareLight,
  thin: UniteSquareThin,
} as const

export const UniteSquare = (props: IconProps) => {
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
