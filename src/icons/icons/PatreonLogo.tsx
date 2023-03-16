import { useContext } from 'react'

import { PatreonLogoBold } from '../bold/patreon-logo-bold'
import { PatreonLogoDuotone } from '../duotone/patreon-logo-duotone'
import { PatreonLogoFill } from '../fill/patreon-logo-fill'
import { PatreonLogoLight } from '../light/patreon-logo-light'
import { PatreonLogoRegular } from '../regular/patreon-logo-regular'
import { PatreonLogoThin } from '../thin/patreon-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PatreonLogoRegular,
  bold: PatreonLogoBold,
  duotone: PatreonLogoDuotone,
  fill: PatreonLogoFill,
  light: PatreonLogoLight,
  thin: PatreonLogoThin,
} as const

export const PatreonLogo = (props: IconProps) => {
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
