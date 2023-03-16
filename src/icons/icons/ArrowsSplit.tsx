import { useContext } from 'react'

import { ArrowsSplitBold } from '../bold/arrows-split-bold'
import { ArrowsSplitDuotone } from '../duotone/arrows-split-duotone'
import { ArrowsSplitFill } from '../fill/arrows-split-fill'
import { ArrowsSplitLight } from '../light/arrows-split-light'
import { ArrowsSplitRegular } from '../regular/arrows-split-regular'
import { ArrowsSplitThin } from '../thin/arrows-split-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ArrowsSplitRegular,
  bold: ArrowsSplitBold,
  duotone: ArrowsSplitDuotone,
  fill: ArrowsSplitFill,
  light: ArrowsSplitLight,
  thin: ArrowsSplitThin,
} as const

export const ArrowsSplit = (props: IconProps) => {
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
