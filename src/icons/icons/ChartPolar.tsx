import { useContext } from 'react'

import { ChartPolarBold } from '../bold/chart-polar-bold'
import { ChartPolarDuotone } from '../duotone/chart-polar-duotone'
import { ChartPolarFill } from '../fill/chart-polar-fill'
import { ChartPolarLight } from '../light/chart-polar-light'
import { ChartPolarRegular } from '../regular/chart-polar-regular'
import { ChartPolarThin } from '../thin/chart-polar-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChartPolarRegular,
  bold: ChartPolarBold,
  duotone: ChartPolarDuotone,
  fill: ChartPolarFill,
  light: ChartPolarLight,
  thin: ChartPolarThin,
} as const

export const ChartPolar = (props: IconProps) => {
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
