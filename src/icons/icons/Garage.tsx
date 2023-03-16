import { useContext } from 'react'

import { GarageBold } from '../bold/garage-bold'
import { GarageDuotone } from '../duotone/garage-duotone'
import { GarageFill } from '../fill/garage-fill'
import { GarageLight } from '../light/garage-light'
import { GarageRegular } from '../regular/garage-regular'
import { GarageThin } from '../thin/garage-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GarageRegular,
  bold: GarageBold,
  duotone: GarageDuotone,
  fill: GarageFill,
  light: GarageLight,
  thin: GarageThin,
} as const

export const Garage = (props: IconProps) => {
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
