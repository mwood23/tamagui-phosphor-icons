import { useContext } from 'react'

import { ImagesBold } from '../bold/images-bold'
import { ImagesDuotone } from '../duotone/images-duotone'
import { ImagesFill } from '../fill/images-fill'
import { ImagesLight } from '../light/images-light'
import { ImagesRegular } from '../regular/images-regular'
import { ImagesThin } from '../thin/images-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ImagesRegular,
  bold: ImagesBold,
  duotone: ImagesDuotone,
  fill: ImagesFill,
  light: ImagesLight,
  thin: ImagesThin,
} as const

export const Images = (props: IconProps) => {
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
