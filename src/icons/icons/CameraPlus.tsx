import { useContext } from 'react'

import { CameraPlusBold } from '../bold/camera-plus-bold'
import { CameraPlusDuotone } from '../duotone/camera-plus-duotone'
import { CameraPlusFill } from '../fill/camera-plus-fill'
import { CameraPlusLight } from '../light/camera-plus-light'
import { CameraPlusRegular } from '../regular/camera-plus-regular'
import { CameraPlusThin } from '../thin/camera-plus-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CameraPlusRegular,
  bold: CameraPlusBold,
  duotone: CameraPlusDuotone,
  fill: CameraPlusFill,
  light: CameraPlusLight,
  thin: CameraPlusThin,
} as const

export const CameraPlus = (props: IconProps) => {
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
