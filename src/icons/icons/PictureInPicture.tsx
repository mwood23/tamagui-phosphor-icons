import { useContext } from 'react'

import { PictureInPictureBold } from '../bold/picture-in-picture-bold'
import { PictureInPictureDuotone } from '../duotone/picture-in-picture-duotone'
import { PictureInPictureFill } from '../fill/picture-in-picture-fill'
import { PictureInPictureLight } from '../light/picture-in-picture-light'
import { PictureInPictureRegular } from '../regular/picture-in-picture-regular'
import { PictureInPictureThin } from '../thin/picture-in-picture-thin'
import { IconContext } from './IconContext'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PictureInPictureRegular,
  bold: PictureInPictureBold,
  duotone: PictureInPictureDuotone,
  fill: PictureInPictureFill,
  light: PictureInPictureLight,
  thin: PictureInPictureThin,
} as const

export const PictureInPicture = (props: IconProps) => {
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
