import { useContext } from 'react'

import { SplitHorizontalBold } from '../bold/split-horizontal-bold'
import { SplitHorizontalDuotone } from '../duotone/split-horizontal-duotone'
import { SplitHorizontalFill } from '../fill/split-horizontal-fill'
import { SplitHorizontalLight } from '../light/split-horizontal-light'
import { SplitHorizontalRegular } from '../regular/split-horizontal-regular'
import { SplitHorizontalThin } from '../thin/split-horizontal-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SplitHorizontalRegular,
  bold: SplitHorizontalBold,
  duotone: SplitHorizontalDuotone,
  fill: SplitHorizontalFill,
  light: SplitHorizontalLight,
  thin: SplitHorizontalThin,
} as const

export const SplitHorizontal = (props: IconProps) => {
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
