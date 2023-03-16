import { useContext } from 'react'

import { HammerBold } from '../bold/hammer-bold'
import { HammerDuotone } from '../duotone/hammer-duotone'
import { HammerFill } from '../fill/hammer-fill'
import { HammerLight } from '../light/hammer-light'
import { HammerRegular } from '../regular/hammer-regular'
import { HammerThin } from '../thin/hammer-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HammerRegular,
  bold: HammerBold,
  duotone: HammerDuotone,
  fill: HammerFill,
  light: HammerLight,
  thin: HammerThin,
} as const

export const Hammer = (props: IconProps) => {
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
