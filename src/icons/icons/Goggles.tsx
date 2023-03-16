import { useContext } from 'react'

import { GogglesBold } from '../bold/goggles-bold'
import { GogglesDuotone } from '../duotone/goggles-duotone'
import { GogglesFill } from '../fill/goggles-fill'
import { GogglesLight } from '../light/goggles-light'
import { GogglesRegular } from '../regular/goggles-regular'
import { GogglesThin } from '../thin/goggles-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GogglesRegular,
  bold: GogglesBold,
  duotone: GogglesDuotone,
  fill: GogglesFill,
  light: GogglesLight,
  thin: GogglesThin,
} as const

export const Goggles = (props: IconProps) => {
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
