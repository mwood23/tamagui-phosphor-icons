import { useContext } from 'react'

import { ControlBold } from '../bold/control-bold'
import { ControlDuotone } from '../duotone/control-duotone'
import { ControlFill } from '../fill/control-fill'
import { ControlLight } from '../light/control-light'
import { ControlRegular } from '../regular/control-regular'
import { ControlThin } from '../thin/control-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ControlRegular,
  bold: ControlBold,
  duotone: ControlDuotone,
  fill: ControlFill,
  light: ControlLight,
  thin: ControlThin,
} as const

export const Control = (props: IconProps) => {
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
