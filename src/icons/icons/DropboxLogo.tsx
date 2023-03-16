import { useContext } from 'react'

import { DropboxLogoBold } from '../bold/dropbox-logo-bold'
import { DropboxLogoDuotone } from '../duotone/dropbox-logo-duotone'
import { DropboxLogoFill } from '../fill/dropbox-logo-fill'
import { DropboxLogoLight } from '../light/dropbox-logo-light'
import { DropboxLogoRegular } from '../regular/dropbox-logo-regular'
import { DropboxLogoThin } from '../thin/dropbox-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DropboxLogoRegular,
  bold: DropboxLogoBold,
  duotone: DropboxLogoDuotone,
  fill: DropboxLogoFill,
  light: DropboxLogoLight,
  thin: DropboxLogoThin,
} as const

export const DropboxLogo = (props: IconProps) => {
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
