import { useContext } from 'react'

import { ChartScatterBold } from '../bold/chart-scatter-bold'
import { ChartScatterDuotone } from '../duotone/chart-scatter-duotone'
import { ChartScatterFill } from '../fill/chart-scatter-fill'
import { ChartScatterLight } from '../light/chart-scatter-light'
import { ChartScatterRegular } from '../regular/chart-scatter-regular'
import { ChartScatterThin } from '../thin/chart-scatter-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChartScatterRegular,
  bold: ChartScatterBold,
  duotone: ChartScatterDuotone,
  fill: ChartScatterFill,
  light: ChartScatterLight,
  thin: ChartScatterThin,
} as const

export const ChartScatter = (props: IconProps) => {
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
