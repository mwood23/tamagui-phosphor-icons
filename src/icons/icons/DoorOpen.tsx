import { useContext } from 'react'

import { DoorOpenBold } from '../bold/door-open-bold'
import { DoorOpenDuotone } from '../duotone/door-open-duotone'
import { DoorOpenFill } from '../fill/door-open-fill'
import { DoorOpenLight } from '../light/door-open-light'
import { DoorOpenRegular } from '../regular/door-open-regular'
import { DoorOpenThin } from '../thin/door-open-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DoorOpenRegular,
  bold: DoorOpenBold,
  duotone: DoorOpenDuotone,
  fill: DoorOpenFill,
  light: DoorOpenLight,
  thin: DoorOpenThin,
} as const

export const DoorOpen = (props: IconProps) => {
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
