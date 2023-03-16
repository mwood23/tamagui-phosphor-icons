import { useContext } from 'react'

import { NotionLogoBold } from '../bold/notion-logo-bold'
import { NotionLogoDuotone } from '../duotone/notion-logo-duotone'
import { NotionLogoFill } from '../fill/notion-logo-fill'
import { NotionLogoLight } from '../light/notion-logo-light'
import { NotionLogoRegular } from '../regular/notion-logo-regular'
import { NotionLogoThin } from '../thin/notion-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: NotionLogoRegular,
  bold: NotionLogoBold,
  duotone: NotionLogoDuotone,
  fill: NotionLogoFill,
  light: NotionLogoLight,
  thin: NotionLogoThin,
} as const

export const NotionLogo = (props: IconProps) => {
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
