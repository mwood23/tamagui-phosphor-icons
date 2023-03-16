import { useContext } from 'react'

import { SquareSplitVerticalBold } from '../bold/square-split-vertical-bold'
import { SquareSplitVerticalDuotone } from '../duotone/square-split-vertical-duotone'
import { SquareSplitVerticalFill } from '../fill/square-split-vertical-fill'
import { SquareSplitVerticalLight } from '../light/square-split-vertical-light'
import { SquareSplitVerticalRegular } from '../regular/square-split-vertical-regular'
import { SquareSplitVerticalThin } from '../thin/square-split-vertical-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SquareSplitVerticalRegular,
  bold: SquareSplitVerticalBold,
  duotone: SquareSplitVerticalDuotone,
  fill: SquareSplitVerticalFill,
  light: SquareSplitVerticalLight,
  thin: SquareSplitVerticalThin,
} as const

export const SquareSplitVertical = (props: IconProps) => {
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
