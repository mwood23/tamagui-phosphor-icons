import { useContext } from 'react'

import { ShrimpBold } from '../bold/shrimp-bold'
import { ShrimpDuotone } from '../duotone/shrimp-duotone'
import { ShrimpFill } from '../fill/shrimp-fill'
import { ShrimpLight } from '../light/shrimp-light'
import { ShrimpRegular } from '../regular/shrimp-regular'
import { ShrimpThin } from '../thin/shrimp-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ShrimpRegular,
  bold: ShrimpBold,
  duotone: ShrimpDuotone,
  fill: ShrimpFill,
  light: ShrimpLight,
  thin: ShrimpThin,
} as const

export const Shrimp = (props: IconProps) => {
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
