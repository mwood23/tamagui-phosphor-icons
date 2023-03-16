import { useContext } from 'react'

import { CodaLogoBold } from '../bold/coda-logo-bold'
import { CodaLogoDuotone } from '../duotone/coda-logo-duotone'
import { CodaLogoFill } from '../fill/coda-logo-fill'
import { CodaLogoLight } from '../light/coda-logo-light'
import { CodaLogoRegular } from '../regular/coda-logo-regular'
import { CodaLogoThin } from '../thin/coda-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CodaLogoRegular,
  bold: CodaLogoBold,
  duotone: CodaLogoDuotone,
  fill: CodaLogoFill,
  light: CodaLogoLight,
  thin: CodaLogoThin,
} as const

export const CodaLogo = (props: IconProps) => {
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
