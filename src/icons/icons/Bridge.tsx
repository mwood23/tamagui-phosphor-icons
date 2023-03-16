import { useContext } from 'react'

import { BridgeBold } from '../bold/bridge-bold'
import { BridgeDuotone } from '../duotone/bridge-duotone'
import { BridgeFill } from '../fill/bridge-fill'
import { BridgeLight } from '../light/bridge-light'
import { BridgeRegular } from '../regular/bridge-regular'
import { BridgeThin } from '../thin/bridge-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BridgeRegular,
  bold: BridgeBold,
  duotone: BridgeDuotone,
  fill: BridgeFill,
  light: BridgeLight,
  thin: BridgeThin,
} as const

export const Bridge = (props: IconProps) => {
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
