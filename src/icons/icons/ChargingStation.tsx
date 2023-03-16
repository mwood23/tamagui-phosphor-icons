import { useContext } from 'react'

import { ChargingStationBold } from '../bold/charging-station-bold'
import { ChargingStationDuotone } from '../duotone/charging-station-duotone'
import { ChargingStationFill } from '../fill/charging-station-fill'
import { ChargingStationLight } from '../light/charging-station-light'
import { ChargingStationRegular } from '../regular/charging-station-regular'
import { ChargingStationThin } from '../thin/charging-station-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChargingStationRegular,
  bold: ChargingStationBold,
  duotone: ChargingStationDuotone,
  fill: ChargingStationFill,
  light: ChargingStationLight,
  thin: ChargingStationThin,
} as const

export const ChargingStation = (props: IconProps) => {
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
