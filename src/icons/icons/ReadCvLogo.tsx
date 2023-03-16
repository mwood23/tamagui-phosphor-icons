import { useContext } from 'react'

import { ReadCvLogoBold } from '../bold/read-cv-logo-bold'
import { ReadCvLogoDuotone } from '../duotone/read-cv-logo-duotone'
import { ReadCvLogoFill } from '../fill/read-cv-logo-fill'
import { ReadCvLogoLight } from '../light/read-cv-logo-light'
import { ReadCvLogoRegular } from '../regular/read-cv-logo-regular'
import { ReadCvLogoThin } from '../thin/read-cv-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ReadCvLogoRegular,
  bold: ReadCvLogoBold,
  duotone: ReadCvLogoDuotone,
  fill: ReadCvLogoFill,
  light: ReadCvLogoLight,
  thin: ReadCvLogoThin,
} as const

export const ReadCvLogo = (props: IconProps) => {
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
