import { useContext } from 'react'

import { SquareSplitHorizontalBold } from '../bold/square-split-horizontal-bold'
import { SquareSplitHorizontalDuotone } from '../duotone/square-split-horizontal-duotone'
import { SquareSplitHorizontalFill } from '../fill/square-split-horizontal-fill'
import { SquareSplitHorizontalLight } from '../light/square-split-horizontal-light'
import { SquareSplitHorizontalRegular } from '../regular/square-split-horizontal-regular'
import { SquareSplitHorizontalThin } from '../thin/square-split-horizontal-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SquareSplitHorizontalRegular,
  bold: SquareSplitHorizontalBold,
  duotone: SquareSplitHorizontalDuotone,
  fill: SquareSplitHorizontalFill,
  light: SquareSplitHorizontalLight,
  thin: SquareSplitHorizontalThin,
} as const

export const SquareSplitHorizontal = (props: IconProps) => {
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
