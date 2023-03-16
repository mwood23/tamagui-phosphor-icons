import { useContext } from 'react'

import { SealQuestionBold } from '../bold/seal-question-bold'
import { SealQuestionDuotone } from '../duotone/seal-question-duotone'
import { SealQuestionFill } from '../fill/seal-question-fill'
import { SealQuestionLight } from '../light/seal-question-light'
import { SealQuestionRegular } from '../regular/seal-question-regular'
import { SealQuestionThin } from '../thin/seal-question-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SealQuestionRegular,
  bold: SealQuestionBold,
  duotone: SealQuestionDuotone,
  fill: SealQuestionFill,
  light: SealQuestionLight,
  thin: SealQuestionThin,
} as const

export const SealQuestion = (props: IconProps) => {
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
