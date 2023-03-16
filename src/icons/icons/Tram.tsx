import { useContext } from 'react'

import { TramBold } from '../bold/tram-bold'
import { TramDuotone } from '../duotone/tram-duotone'
import { TramFill } from '../fill/tram-fill'
import { TramLight } from '../light/tram-light'
import { TramRegular } from '../regular/tram-regular'
import { TramThin } from '../thin/tram-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TramRegular,
  bold: TramBold,
  duotone: TramDuotone,
  fill: TramFill,
  light: TramLight,
  thin: TramThin,
} as const

export const Tram = (props: IconProps) => {
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
