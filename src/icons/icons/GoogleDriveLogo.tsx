import { useContext } from 'react'

import { GoogleDriveLogoBold } from '../bold/google-drive-logo-bold'
import { GoogleDriveLogoDuotone } from '../duotone/google-drive-logo-duotone'
import { GoogleDriveLogoFill } from '../fill/google-drive-logo-fill'
import { GoogleDriveLogoLight } from '../light/google-drive-logo-light'
import { GoogleDriveLogoRegular } from '../regular/google-drive-logo-regular'
import { GoogleDriveLogoThin } from '../thin/google-drive-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GoogleDriveLogoRegular,
  bold: GoogleDriveLogoBold,
  duotone: GoogleDriveLogoDuotone,
  fill: GoogleDriveLogoFill,
  light: GoogleDriveLogoLight,
  thin: GoogleDriveLogoThin,
} as const

export const GoogleDriveLogo = (props: IconProps) => {
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
