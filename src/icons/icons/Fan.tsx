import { useContext } from 'react'

import { FanBold } from '../bold/fan-bold'
import { FanDuotone } from '../duotone/fan-duotone'
import { FanFill } from '../fill/fan-fill'
import { FanLight } from '../light/fan-light'
import { FanRegular } from '../regular/fan-regular'
import { FanThin } from '../thin/fan-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FanRegular,
  bold: FanBold,
  duotone: FanDuotone,
  fill: FanFill,
  light: FanLight,
  thin: FanThin,
} as const

export const Fan = (props: IconProps) => {
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
