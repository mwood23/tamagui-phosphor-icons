import { useContext } from 'react'

import { CloudWarningBold } from '../bold/cloud-warning-bold'
import { CloudWarningDuotone } from '../duotone/cloud-warning-duotone'
import { CloudWarningFill } from '../fill/cloud-warning-fill'
import { CloudWarningLight } from '../light/cloud-warning-light'
import { CloudWarningRegular } from '../regular/cloud-warning-regular'
import { CloudWarningThin } from '../thin/cloud-warning-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CloudWarningRegular,
  bold: CloudWarningBold,
  duotone: CloudWarningDuotone,
  fill: CloudWarningFill,
  light: CloudWarningLight,
  thin: CloudWarningThin,
} as const

export const CloudWarning = (props: IconProps) => {
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
