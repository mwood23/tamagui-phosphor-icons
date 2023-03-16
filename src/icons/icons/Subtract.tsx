import { useContext } from 'react'

import { SubtractBold } from '../bold/subtract-bold'
import { SubtractDuotone } from '../duotone/subtract-duotone'
import { SubtractFill } from '../fill/subtract-fill'
import { SubtractLight } from '../light/subtract-light'
import { SubtractRegular } from '../regular/subtract-regular'
import { SubtractThin } from '../thin/subtract-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SubtractRegular,
  bold: SubtractBold,
  duotone: SubtractDuotone,
  fill: SubtractFill,
  light: SubtractLight,
  thin: SubtractThin,
} as const

export const Subtract = (props: IconProps) => {
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
