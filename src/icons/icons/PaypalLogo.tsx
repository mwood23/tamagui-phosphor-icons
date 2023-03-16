import { useContext } from 'react'

import { PaypalLogoBold } from '../bold/paypal-logo-bold'
import { PaypalLogoDuotone } from '../duotone/paypal-logo-duotone'
import { PaypalLogoFill } from '../fill/paypal-logo-fill'
import { PaypalLogoLight } from '../light/paypal-logo-light'
import { PaypalLogoRegular } from '../regular/paypal-logo-regular'
import { PaypalLogoThin } from '../thin/paypal-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PaypalLogoRegular,
  bold: PaypalLogoBold,
  duotone: PaypalLogoDuotone,
  fill: PaypalLogoFill,
  light: PaypalLogoLight,
  thin: PaypalLogoThin,
} as const

export const PaypalLogo = (props: IconProps) => {
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
