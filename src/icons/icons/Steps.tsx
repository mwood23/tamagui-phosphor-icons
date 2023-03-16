import { useContext } from 'react'

import { StepsBold } from '../bold/steps-bold'
import { StepsDuotone } from '../duotone/steps-duotone'
import { StepsFill } from '../fill/steps-fill'
import { StepsLight } from '../light/steps-light'
import { StepsRegular } from '../regular/steps-regular'
import { StepsThin } from '../thin/steps-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: StepsRegular,
  bold: StepsBold,
  duotone: StepsDuotone,
  fill: StepsFill,
  light: StepsLight,
  thin: StepsThin,
} as const

export const Steps = (props: IconProps) => {
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
