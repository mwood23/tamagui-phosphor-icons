import { useContext } from 'react'

import { ScooterBold } from '../bold/scooter-bold'
import { ScooterDuotone } from '../duotone/scooter-duotone'
import { ScooterFill } from '../fill/scooter-fill'
import { ScooterLight } from '../light/scooter-light'
import { ScooterRegular } from '../regular/scooter-regular'
import { ScooterThin } from '../thin/scooter-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ScooterRegular,
  bold: ScooterBold,
  duotone: ScooterDuotone,
  fill: ScooterFill,
  light: ScooterLight,
  thin: ScooterThin,
} as const

export const Scooter = (props: IconProps) => {
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
