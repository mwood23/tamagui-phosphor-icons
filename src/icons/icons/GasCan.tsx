import { useContext } from 'react'

import { GasCanBold } from '../bold/gas-can-bold'
import { GasCanDuotone } from '../duotone/gas-can-duotone'
import { GasCanFill } from '../fill/gas-can-fill'
import { GasCanLight } from '../light/gas-can-light'
import { GasCanRegular } from '../regular/gas-can-regular'
import { GasCanThin } from '../thin/gas-can-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GasCanRegular,
  bold: GasCanBold,
  duotone: GasCanDuotone,
  fill: GasCanFill,
  light: GasCanLight,
  thin: GasCanThin,
} as const

export const GasCan = (props: IconProps) => {
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
