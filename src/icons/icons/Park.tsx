import { useContext } from 'react'

import { ParkBold } from '../bold/park-bold'
import { ParkDuotone } from '../duotone/park-duotone'
import { ParkFill } from '../fill/park-fill'
import { ParkLight } from '../light/park-light'
import { ParkRegular } from '../regular/park-regular'
import { ParkThin } from '../thin/park-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ParkRegular,
  bold: ParkBold,
  duotone: ParkDuotone,
  fill: ParkFill,
  light: ParkLight,
  thin: ParkThin,
} as const

export const Park = (props: IconProps) => {
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
