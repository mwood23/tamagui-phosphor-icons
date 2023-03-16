import { useContext } from 'react'

import { GoogleCardboardLogoBold } from '../bold/google-cardboard-logo-bold'
import { GoogleCardboardLogoDuotone } from '../duotone/google-cardboard-logo-duotone'
import { GoogleCardboardLogoFill } from '../fill/google-cardboard-logo-fill'
import { GoogleCardboardLogoLight } from '../light/google-cardboard-logo-light'
import { GoogleCardboardLogoRegular } from '../regular/google-cardboard-logo-regular'
import { GoogleCardboardLogoThin } from '../thin/google-cardboard-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GoogleCardboardLogoRegular,
  bold: GoogleCardboardLogoBold,
  duotone: GoogleCardboardLogoDuotone,
  fill: GoogleCardboardLogoFill,
  light: GoogleCardboardLogoLight,
  thin: GoogleCardboardLogoThin,
} as const

export const GoogleCardboardLogo = (props: IconProps) => {
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
