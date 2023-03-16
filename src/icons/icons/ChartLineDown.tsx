import { useContext } from 'react'

import { ChartLineDownBold } from '../bold/chart-line-down-bold'
import { ChartLineDownDuotone } from '../duotone/chart-line-down-duotone'
import { ChartLineDownFill } from '../fill/chart-line-down-fill'
import { ChartLineDownLight } from '../light/chart-line-down-light'
import { ChartLineDownRegular } from '../regular/chart-line-down-regular'
import { ChartLineDownThin } from '../thin/chart-line-down-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChartLineDownRegular,
  bold: ChartLineDownBold,
  duotone: ChartLineDownDuotone,
  fill: ChartLineDownFill,
  light: ChartLineDownLight,
  thin: ChartLineDownThin,
} as const

export const ChartLineDown = (props: IconProps) => {
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
