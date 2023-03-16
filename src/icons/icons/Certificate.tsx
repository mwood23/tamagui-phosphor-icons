import { useContext } from 'react'

import { CertificateBold } from '../bold/certificate-bold'
import { CertificateDuotone } from '../duotone/certificate-duotone'
import { CertificateFill } from '../fill/certificate-fill'
import { CertificateLight } from '../light/certificate-light'
import { CertificateRegular } from '../regular/certificate-regular'
import { CertificateThin } from '../thin/certificate-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CertificateRegular,
  bold: CertificateBold,
  duotone: CertificateDuotone,
  fill: CertificateFill,
  light: CertificateLight,
  thin: CertificateThin,
} as const

export const Certificate = (props: IconProps) => {
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
