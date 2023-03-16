import { useContext } from 'react'

import { ChartDonutBold } from '../bold/chart-donut-bold'
import { ChartDonutDuotone } from '../duotone/chart-donut-duotone'
import { ChartDonutFill } from '../fill/chart-donut-fill'
import { ChartDonutLight } from '../light/chart-donut-light'
import { ChartDonutRegular } from '../regular/chart-donut-regular'
import { ChartDonutThin } from '../thin/chart-donut-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChartDonutRegular,
  bold: ChartDonutBold,
  duotone: ChartDonutDuotone,
  fill: ChartDonutFill,
  light: ChartDonutLight,
  thin: ChartDonutThin,
} as const

export const ChartDonut = (props: IconProps) => {
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
