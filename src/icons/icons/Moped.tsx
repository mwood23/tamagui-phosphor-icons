import { useContext } from 'react'

import { MopedBold } from '../bold/moped-bold'
import { MopedDuotone } from '../duotone/moped-duotone'
import { MopedFill } from '../fill/moped-fill'
import { MopedLight } from '../light/moped-light'
import { MopedRegular } from '../regular/moped-regular'
import { MopedThin } from '../thin/moped-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MopedRegular,
  bold: MopedBold,
  duotone: MopedDuotone,
  fill: MopedFill,
  light: MopedLight,
  thin: MopedThin,
} as const

export const Moped = (props: IconProps) => {
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
