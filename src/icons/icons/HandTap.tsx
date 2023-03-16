import { useContext } from 'react'

import { HandTapBold } from '../bold/hand-tap-bold'
import { HandTapDuotone } from '../duotone/hand-tap-duotone'
import { HandTapFill } from '../fill/hand-tap-fill'
import { HandTapLight } from '../light/hand-tap-light'
import { HandTapRegular } from '../regular/hand-tap-regular'
import { HandTapThin } from '../thin/hand-tap-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HandTapRegular,
  bold: HandTapBold,
  duotone: HandTapDuotone,
  fill: HandTapFill,
  light: HandTapLight,
  thin: HandTapThin,
} as const

export const HandTap = (props: IconProps) => {
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
