import { useContext } from 'react'

import { PantsBold } from '../bold/pants-bold'
import { PantsDuotone } from '../duotone/pants-duotone'
import { PantsFill } from '../fill/pants-fill'
import { PantsLight } from '../light/pants-light'
import { PantsRegular } from '../regular/pants-regular'
import { PantsThin } from '../thin/pants-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PantsRegular,
  bold: PantsBold,
  duotone: PantsDuotone,
  fill: PantsFill,
  light: PantsLight,
  thin: PantsThin,
} as const

export const Pants = (props: IconProps) => {
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
