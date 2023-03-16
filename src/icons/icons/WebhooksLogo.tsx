import { useContext } from 'react'

import { WebhooksLogoBold } from '../bold/webhooks-logo-bold'
import { WebhooksLogoDuotone } from '../duotone/webhooks-logo-duotone'
import { WebhooksLogoFill } from '../fill/webhooks-logo-fill'
import { WebhooksLogoLight } from '../light/webhooks-logo-light'
import { WebhooksLogoRegular } from '../regular/webhooks-logo-regular'
import { WebhooksLogoThin } from '../thin/webhooks-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: WebhooksLogoRegular,
  bold: WebhooksLogoBold,
  duotone: WebhooksLogoDuotone,
  fill: WebhooksLogoFill,
  light: WebhooksLogoLight,
  thin: WebhooksLogoThin,
} as const

export const WebhooksLogo = (props: IconProps) => {
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
