import { useContext } from 'react'

import { ParallelogramBold } from '../bold/parallelogram-bold'
import { ParallelogramDuotone } from '../duotone/parallelogram-duotone'
import { ParallelogramFill } from '../fill/parallelogram-fill'
import { ParallelogramLight } from '../light/parallelogram-light'
import { ParallelogramRegular } from '../regular/parallelogram-regular'
import { ParallelogramThin } from '../thin/parallelogram-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ParallelogramRegular,
  bold: ParallelogramBold,
  duotone: ParallelogramDuotone,
  fill: ParallelogramFill,
  light: ParallelogramLight,
  thin: ParallelogramThin,
} as const

export const Parallelogram = (props: IconProps) => {
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
