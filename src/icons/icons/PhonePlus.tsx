import { useContext } from 'react'

import { PhonePlusBold } from '../bold/phone-plus-bold'
import { PhonePlusDuotone } from '../duotone/phone-plus-duotone'
import { PhonePlusFill } from '../fill/phone-plus-fill'
import { PhonePlusLight } from '../light/phone-plus-light'
import { PhonePlusRegular } from '../regular/phone-plus-regular'
import { PhonePlusThin } from '../thin/phone-plus-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PhonePlusRegular,
  bold: PhonePlusBold,
  duotone: PhonePlusDuotone,
  fill: PhonePlusFill,
  light: PhonePlusLight,
  thin: PhonePlusThin,
} as const

export const PhonePlus = (props: IconProps) => {
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
