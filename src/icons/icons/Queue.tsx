import { useContext } from 'react'

import { QueueBold } from '../bold/queue-bold'
import { QueueDuotone } from '../duotone/queue-duotone'
import { QueueFill } from '../fill/queue-fill'
import { QueueLight } from '../light/queue-light'
import { QueueRegular } from '../regular/queue-regular'
import { QueueThin } from '../thin/queue-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: QueueRegular,
  bold: QueueBold,
  duotone: QueueDuotone,
  fill: QueueFill,
  light: QueueLight,
  thin: QueueThin,
} as const

export const Queue = (props: IconProps) => {
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
