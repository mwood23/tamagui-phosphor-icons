import { useContext } from 'react'

import { CubeFocusBold } from '../bold/cube-focus-bold'
import { CubeFocusDuotone } from '../duotone/cube-focus-duotone'
import { CubeFocusFill } from '../fill/cube-focus-fill'
import { CubeFocusLight } from '../light/cube-focus-light'
import { CubeFocusRegular } from '../regular/cube-focus-regular'
import { CubeFocusThin } from '../thin/cube-focus-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CubeFocusRegular,
  bold: CubeFocusBold,
  duotone: CubeFocusDuotone,
  fill: CubeFocusFill,
  light: CubeFocusLight,
  thin: CubeFocusThin,
} as const

export const CubeFocus = (props: IconProps) => {
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
