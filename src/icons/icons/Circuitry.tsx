import { useContext } from 'react'

import { CircuitryBold } from '../bold/circuitry-bold'
import { CircuitryDuotone } from '../duotone/circuitry-duotone'
import { CircuitryFill } from '../fill/circuitry-fill'
import { CircuitryLight } from '../light/circuitry-light'
import { CircuitryRegular } from '../regular/circuitry-regular'
import { CircuitryThin } from '../thin/circuitry-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CircuitryRegular,
  bold: CircuitryBold,
  duotone: CircuitryDuotone,
  fill: CircuitryFill,
  light: CircuitryLight,
  thin: CircuitryThin,
} as const

export const Circuitry = (props: IconProps) => {
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
