import { useContext } from 'react'

import { ContactlessPaymentBold } from '../bold/contactless-payment-bold'
import { ContactlessPaymentDuotone } from '../duotone/contactless-payment-duotone'
import { ContactlessPaymentFill } from '../fill/contactless-payment-fill'
import { ContactlessPaymentLight } from '../light/contactless-payment-light'
import { ContactlessPaymentRegular } from '../regular/contactless-payment-regular'
import { ContactlessPaymentThin } from '../thin/contactless-payment-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ContactlessPaymentRegular,
  bold: ContactlessPaymentBold,
  duotone: ContactlessPaymentDuotone,
  fill: ContactlessPaymentFill,
  light: ContactlessPaymentLight,
  thin: ContactlessPaymentThin,
} as const

export const ContactlessPayment = (props: IconProps) => {
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
