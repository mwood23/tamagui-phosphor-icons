import { useContext } from 'react'

import { FingerprintBold } from '../bold/fingerprint-bold'
import { FingerprintDuotone } from '../duotone/fingerprint-duotone'
import { FingerprintFill } from '../fill/fingerprint-fill'
import { FingerprintLight } from '../light/fingerprint-light'
import { FingerprintRegular } from '../regular/fingerprint-regular'
import { FingerprintThin } from '../thin/fingerprint-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FingerprintRegular,
  bold: FingerprintBold,
  duotone: FingerprintDuotone,
  fill: FingerprintFill,
  light: FingerprintLight,
  thin: FingerprintThin,
} as const

export const Fingerprint = (props: IconProps) => {
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
