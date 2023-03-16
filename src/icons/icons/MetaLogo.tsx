import { useContext } from 'react'

import { MetaLogoBold } from '../bold/meta-logo-bold'
import { MetaLogoDuotone } from '../duotone/meta-logo-duotone'
import { MetaLogoFill } from '../fill/meta-logo-fill'
import { MetaLogoLight } from '../light/meta-logo-light'
import { MetaLogoRegular } from '../regular/meta-logo-regular'
import { MetaLogoThin } from '../thin/meta-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MetaLogoRegular,
  bold: MetaLogoBold,
  duotone: MetaLogoDuotone,
  fill: MetaLogoFill,
  light: MetaLogoLight,
  thin: MetaLogoThin,
} as const

export const MetaLogo = (props: IconProps) => {
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
