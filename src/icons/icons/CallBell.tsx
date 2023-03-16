import { useContext } from 'react'

import { CallBellBold } from '../bold/call-bell-bold'
import { CallBellDuotone } from '../duotone/call-bell-duotone'
import { CallBellFill } from '../fill/call-bell-fill'
import { CallBellLight } from '../light/call-bell-light'
import { CallBellRegular } from '../regular/call-bell-regular'
import { CallBellThin } from '../thin/call-bell-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CallBellRegular,
  bold: CallBellBold,
  duotone: CallBellDuotone,
  fill: CallBellFill,
  light: CallBellLight,
  thin: CallBellThin,
} as const

export const CallBell = (props: IconProps) => {
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
