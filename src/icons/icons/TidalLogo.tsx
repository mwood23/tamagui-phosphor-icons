import { useContext } from 'react'

import { TidalLogoBold } from '../bold/tidal-logo-bold'
import { TidalLogoDuotone } from '../duotone/tidal-logo-duotone'
import { TidalLogoFill } from '../fill/tidal-logo-fill'
import { TidalLogoLight } from '../light/tidal-logo-light'
import { TidalLogoRegular } from '../regular/tidal-logo-regular'
import { TidalLogoThin } from '../thin/tidal-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TidalLogoRegular,
  bold: TidalLogoBold,
  duotone: TidalLogoDuotone,
  fill: TidalLogoFill,
  light: TidalLogoLight,
  thin: TidalLogoThin,
} as const

export const TidalLogo = (props: IconProps) => {
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
