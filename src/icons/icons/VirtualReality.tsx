import { useContext } from 'react'

import { VirtualRealityBold } from '../bold/virtual-reality-bold'
import { VirtualRealityDuotone } from '../duotone/virtual-reality-duotone'
import { VirtualRealityFill } from '../fill/virtual-reality-fill'
import { VirtualRealityLight } from '../light/virtual-reality-light'
import { VirtualRealityRegular } from '../regular/virtual-reality-regular'
import { VirtualRealityThin } from '../thin/virtual-reality-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: VirtualRealityRegular,
  bold: VirtualRealityBold,
  duotone: VirtualRealityDuotone,
  fill: VirtualRealityFill,
  light: VirtualRealityLight,
  thin: VirtualRealityThin,
} as const

export const VirtualReality = (props: IconProps) => {
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
