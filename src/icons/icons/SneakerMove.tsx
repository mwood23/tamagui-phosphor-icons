import { useContext } from 'react'

import { SneakerMoveBold } from '../bold/sneaker-move-bold'
import { SneakerMoveDuotone } from '../duotone/sneaker-move-duotone'
import { SneakerMoveFill } from '../fill/sneaker-move-fill'
import { SneakerMoveLight } from '../light/sneaker-move-light'
import { SneakerMoveRegular } from '../regular/sneaker-move-regular'
import { SneakerMoveThin } from '../thin/sneaker-move-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SneakerMoveRegular,
  bold: SneakerMoveBold,
  duotone: SneakerMoveDuotone,
  fill: SneakerMoveFill,
  light: SneakerMoveLight,
  thin: SneakerMoveThin,
} as const

export const SneakerMove = (props: IconProps) => {
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
