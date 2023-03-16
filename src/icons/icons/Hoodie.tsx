import { useContext } from 'react'

import { HoodieBold } from '../bold/hoodie-bold'
import { HoodieDuotone } from '../duotone/hoodie-duotone'
import { HoodieFill } from '../fill/hoodie-fill'
import { HoodieLight } from '../light/hoodie-light'
import { HoodieRegular } from '../regular/hoodie-regular'
import { HoodieThin } from '../thin/hoodie-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HoodieRegular,
  bold: HoodieBold,
  duotone: HoodieDuotone,
  fill: HoodieFill,
  light: HoodieLight,
  thin: HoodieThin,
} as const

export const Hoodie = (props: IconProps) => {
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
