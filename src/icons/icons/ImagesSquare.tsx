import { useContext } from 'react'

import { ImagesSquareBold } from '../bold/images-square-bold'
import { ImagesSquareDuotone } from '../duotone/images-square-duotone'
import { ImagesSquareFill } from '../fill/images-square-fill'
import { ImagesSquareLight } from '../light/images-square-light'
import { ImagesSquareRegular } from '../regular/images-square-regular'
import { ImagesSquareThin } from '../thin/images-square-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ImagesSquareRegular,
  bold: ImagesSquareBold,
  duotone: ImagesSquareDuotone,
  fill: ImagesSquareFill,
  light: ImagesSquareLight,
  thin: ImagesSquareThin,
} as const

export const ImagesSquare = (props: IconProps) => {
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
