import { useContext } from 'react'

import { DressBold } from '../bold/dress-bold'
import { DressDuotone } from '../duotone/dress-duotone'
import { DressFill } from '../fill/dress-fill'
import { DressLight } from '../light/dress-light'
import { DressRegular } from '../regular/dress-regular'
import { DressThin } from '../thin/dress-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DressRegular,
  bold: DressBold,
  duotone: DressDuotone,
  fill: DressFill,
  light: DressLight,
  thin: DressThin,
} as const

export const Dress = (props: IconProps) => {
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
