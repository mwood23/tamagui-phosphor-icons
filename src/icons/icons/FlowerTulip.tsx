import { useContext } from 'react'

import { FlowerTulipBold } from '../bold/flower-tulip-bold'
import { FlowerTulipDuotone } from '../duotone/flower-tulip-duotone'
import { FlowerTulipFill } from '../fill/flower-tulip-fill'
import { FlowerTulipLight } from '../light/flower-tulip-light'
import { FlowerTulipRegular } from '../regular/flower-tulip-regular'
import { FlowerTulipThin } from '../thin/flower-tulip-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FlowerTulipRegular,
  bold: FlowerTulipBold,
  duotone: FlowerTulipDuotone,
  fill: FlowerTulipFill,
  light: FlowerTulipLight,
  thin: FlowerTulipThin,
} as const

export const FlowerTulip = (props: IconProps) => {
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
