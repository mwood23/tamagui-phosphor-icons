import { useContext } from 'react'

import { AmazonLogoBold } from '../bold/amazon-logo-bold'
import { AmazonLogoDuotone } from '../duotone/amazon-logo-duotone'
import { AmazonLogoFill } from '../fill/amazon-logo-fill'
import { AmazonLogoLight } from '../light/amazon-logo-light'
import { AmazonLogoRegular } from '../regular/amazon-logo-regular'
import { AmazonLogoThin } from '../thin/amazon-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: AmazonLogoRegular,
  bold: AmazonLogoBold,
  duotone: AmazonLogoDuotone,
  fill: AmazonLogoFill,
  light: AmazonLogoLight,
  thin: AmazonLogoThin,
} as const

export const AmazonLogo = (props: IconProps) => {
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
