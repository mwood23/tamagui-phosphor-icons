import { useContext } from 'react'

import { EraserBold } from '../bold/eraser-bold'
import { EraserDuotone } from '../duotone/eraser-duotone'
import { EraserFill } from '../fill/eraser-fill'
import { EraserLight } from '../light/eraser-light'
import { EraserRegular } from '../regular/eraser-regular'
import { EraserThin } from '../thin/eraser-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: EraserRegular,
  bold: EraserBold,
  duotone: EraserDuotone,
  fill: EraserFill,
  light: EraserLight,
  thin: EraserThin,
} as const

export const Eraser = (props: IconProps) => {
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
