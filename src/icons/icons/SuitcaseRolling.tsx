import { useContext } from 'react'

import { SuitcaseRollingBold } from '../bold/suitcase-rolling-bold'
import { SuitcaseRollingDuotone } from '../duotone/suitcase-rolling-duotone'
import { SuitcaseRollingFill } from '../fill/suitcase-rolling-fill'
import { SuitcaseRollingLight } from '../light/suitcase-rolling-light'
import { SuitcaseRollingRegular } from '../regular/suitcase-rolling-regular'
import { SuitcaseRollingThin } from '../thin/suitcase-rolling-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SuitcaseRollingRegular,
  bold: SuitcaseRollingBold,
  duotone: SuitcaseRollingDuotone,
  fill: SuitcaseRollingFill,
  light: SuitcaseRollingLight,
  thin: SuitcaseRollingThin,
} as const

export const SuitcaseRolling = (props: IconProps) => {
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
