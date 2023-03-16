import { useContext } from 'react'

import { EscalatorUpBold } from '../bold/escalator-up-bold'
import { EscalatorUpDuotone } from '../duotone/escalator-up-duotone'
import { EscalatorUpFill } from '../fill/escalator-up-fill'
import { EscalatorUpLight } from '../light/escalator-up-light'
import { EscalatorUpRegular } from '../regular/escalator-up-regular'
import { EscalatorUpThin } from '../thin/escalator-up-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: EscalatorUpRegular,
  bold: EscalatorUpBold,
  duotone: EscalatorUpDuotone,
  fill: EscalatorUpFill,
  light: EscalatorUpLight,
  thin: EscalatorUpThin,
} as const

export const EscalatorUp = (props: IconProps) => {
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
