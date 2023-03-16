import { useContext } from 'react'

import { SplitVerticalBold } from '../bold/split-vertical-bold'
import { SplitVerticalDuotone } from '../duotone/split-vertical-duotone'
import { SplitVerticalFill } from '../fill/split-vertical-fill'
import { SplitVerticalLight } from '../light/split-vertical-light'
import { SplitVerticalRegular } from '../regular/split-vertical-regular'
import { SplitVerticalThin } from '../thin/split-vertical-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SplitVerticalRegular,
  bold: SplitVerticalBold,
  duotone: SplitVerticalDuotone,
  fill: SplitVerticalFill,
  light: SplitVerticalLight,
  thin: SplitVerticalThin,
} as const

export const SplitVertical = (props: IconProps) => {
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
