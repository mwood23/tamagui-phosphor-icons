import { useContext } from 'react'

import { FeatherBold } from '../bold/feather-bold'
import { FeatherDuotone } from '../duotone/feather-duotone'
import { FeatherFill } from '../fill/feather-fill'
import { FeatherLight } from '../light/feather-light'
import { FeatherRegular } from '../regular/feather-regular'
import { FeatherThin } from '../thin/feather-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FeatherRegular,
  bold: FeatherBold,
  duotone: FeatherDuotone,
  fill: FeatherFill,
  light: FeatherLight,
  thin: FeatherThin,
} as const

export const Feather = (props: IconProps) => {
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
