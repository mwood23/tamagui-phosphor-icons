import { useContext } from 'react'

import { DevToLogoBold } from '../bold/dev-to-logo-bold'
import { DevToLogoDuotone } from '../duotone/dev-to-logo-duotone'
import { DevToLogoFill } from '../fill/dev-to-logo-fill'
import { DevToLogoLight } from '../light/dev-to-logo-light'
import { DevToLogoRegular } from '../regular/dev-to-logo-regular'
import { DevToLogoThin } from '../thin/dev-to-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DevToLogoRegular,
  bold: DevToLogoBold,
  duotone: DevToLogoDuotone,
  fill: DevToLogoFill,
  light: DevToLogoLight,
  thin: DevToLogoThin,
} as const

export const DevToLogo = (props: IconProps) => {
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
