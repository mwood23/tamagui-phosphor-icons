import { useContext } from 'react'

import { PepperBold } from '../bold/pepper-bold'
import { PepperDuotone } from '../duotone/pepper-duotone'
import { PepperFill } from '../fill/pepper-fill'
import { PepperLight } from '../light/pepper-light'
import { PepperRegular } from '../regular/pepper-regular'
import { PepperThin } from '../thin/pepper-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PepperRegular,
  bold: PepperBold,
  duotone: PepperDuotone,
  fill: PepperFill,
  light: PepperLight,
  thin: PepperThin,
} as const

export const Pepper = (props: IconProps) => {
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
