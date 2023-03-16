import { useContext } from 'react'

import { EscalatorDownBold } from '../bold/escalator-down-bold'
import { EscalatorDownDuotone } from '../duotone/escalator-down-duotone'
import { EscalatorDownFill } from '../fill/escalator-down-fill'
import { EscalatorDownLight } from '../light/escalator-down-light'
import { EscalatorDownRegular } from '../regular/escalator-down-regular'
import { EscalatorDownThin } from '../thin/escalator-down-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: EscalatorDownRegular,
  bold: EscalatorDownBold,
  duotone: EscalatorDownDuotone,
  fill: EscalatorDownFill,
  light: EscalatorDownLight,
  thin: EscalatorDownThin,
} as const

export const EscalatorDown = (props: IconProps) => {
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
