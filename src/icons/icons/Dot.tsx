import { useContext } from 'react'

import { DotBold } from '../bold/dot-bold'
import { DotDuotone } from '../duotone/dot-duotone'
import { DotFill } from '../fill/dot-fill'
import { DotLight } from '../light/dot-light'
import { DotRegular } from '../regular/dot-regular'
import { DotThin } from '../thin/dot-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DotRegular,
  bold: DotBold,
  duotone: DotDuotone,
  fill: DotFill,
  light: DotLight,
  thin: DotThin,
} as const

export const Dot = (props: IconProps) => {
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
