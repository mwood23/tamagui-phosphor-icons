import { useContext } from 'react'

import { SealWarningBold } from '../bold/seal-warning-bold'
import { SealWarningDuotone } from '../duotone/seal-warning-duotone'
import { SealWarningFill } from '../fill/seal-warning-fill'
import { SealWarningLight } from '../light/seal-warning-light'
import { SealWarningRegular } from '../regular/seal-warning-regular'
import { SealWarningThin } from '../thin/seal-warning-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SealWarningRegular,
  bold: SealWarningBold,
  duotone: SealWarningDuotone,
  fill: SealWarningFill,
  light: SealWarningLight,
  thin: SealWarningThin,
} as const

export const SealWarning = (props: IconProps) => {
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
