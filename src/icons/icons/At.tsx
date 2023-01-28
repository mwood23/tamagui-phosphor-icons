import { useContext } from 'react'

import { AtBold } from '../bold/at-bold'
import { AtDuotone } from '../duotone/at-duotone'
import { AtFill } from '../fill/at-fill'
import { AtLight } from '../light/at-light'
import { AtRegular } from '../regular/at-regular'
import { AtThin } from '../thin/at-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: AtRegular,
  bold: AtBold,
  duotone: AtDuotone,
  fill: AtFill,
  light: AtLight,
  thin: AtThin,
} as const

export const At = (props: IconProps) => {
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
