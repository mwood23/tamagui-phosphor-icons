import { useContext } from 'react'

import { MicrosoftOutlookLogoBold } from '../bold/microsoft-outlook-logo-bold'
import { MicrosoftOutlookLogoDuotone } from '../duotone/microsoft-outlook-logo-duotone'
import { MicrosoftOutlookLogoFill } from '../fill/microsoft-outlook-logo-fill'
import { MicrosoftOutlookLogoLight } from '../light/microsoft-outlook-logo-light'
import { MicrosoftOutlookLogoRegular } from '../regular/microsoft-outlook-logo-regular'
import { MicrosoftOutlookLogoThin } from '../thin/microsoft-outlook-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MicrosoftOutlookLogoRegular,
  bold: MicrosoftOutlookLogoBold,
  duotone: MicrosoftOutlookLogoDuotone,
  fill: MicrosoftOutlookLogoFill,
  light: MicrosoftOutlookLogoLight,
  thin: MicrosoftOutlookLogoThin,
} as const

export const MicrosoftOutlookLogo = (props: IconProps) => {
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
