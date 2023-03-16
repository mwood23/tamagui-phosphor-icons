import { useContext } from 'react'

import { GoodreadsLogoBold } from '../bold/goodreads-logo-bold'
import { GoodreadsLogoDuotone } from '../duotone/goodreads-logo-duotone'
import { GoodreadsLogoFill } from '../fill/goodreads-logo-fill'
import { GoodreadsLogoLight } from '../light/goodreads-logo-light'
import { GoodreadsLogoRegular } from '../regular/goodreads-logo-regular'
import { GoodreadsLogoThin } from '../thin/goodreads-logo-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GoodreadsLogoRegular,
  bold: GoodreadsLogoBold,
  duotone: GoodreadsLogoDuotone,
  fill: GoodreadsLogoFill,
  light: GoodreadsLogoLight,
  thin: GoodreadsLogoThin,
} as const

export const GoodreadsLogo = (props: IconProps) => {
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
