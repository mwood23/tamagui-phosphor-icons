import { useContext } from 'react'

import { SoundcloudLogoBold } from '../bold/soundcloud-logo-bold'
import { SoundcloudLogoDuotone } from '../duotone/soundcloud-logo-duotone'
import { SoundcloudLogoFill } from '../fill/soundcloud-logo-fill'
import { SoundcloudLogoLight } from '../light/soundcloud-logo-light'
import { SoundcloudLogoRegular } from '../regular/soundcloud-logo-regular'
import { SoundcloudLogoThin } from '../thin/soundcloud-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SoundcloudLogoRegular,
  bold: SoundcloudLogoBold,
  duotone: SoundcloudLogoDuotone,
  fill: SoundcloudLogoFill,
  light: SoundcloudLogoLight,
  thin: SoundcloudLogoThin,
} as const

export const SoundcloudLogo = (props: IconProps) => {
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
