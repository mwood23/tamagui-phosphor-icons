import { useContext } from 'react'

import { RoadHorizonBold } from '../bold/road-horizon-bold'
import { RoadHorizonDuotone } from '../duotone/road-horizon-duotone'
import { RoadHorizonFill } from '../fill/road-horizon-fill'
import { RoadHorizonLight } from '../light/road-horizon-light'
import { RoadHorizonRegular } from '../regular/road-horizon-regular'
import { RoadHorizonThin } from '../thin/road-horizon-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: RoadHorizonRegular,
  bold: RoadHorizonBold,
  duotone: RoadHorizonDuotone,
  fill: RoadHorizonFill,
  light: RoadHorizonLight,
  thin: RoadHorizonThin,
} as const

export const RoadHorizon = (props: IconProps) => {
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
