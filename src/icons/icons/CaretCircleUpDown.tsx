import { useContext } from 'react'

import { CaretCircleUpDownBold } from '../bold/caret-circle-up-down-bold'
import { CaretCircleUpDownDuotone } from '../duotone/caret-circle-up-down-duotone'
import { CaretCircleUpDownFill } from '../fill/caret-circle-up-down-fill'
import { CaretCircleUpDownLight } from '../light/caret-circle-up-down-light'
import { CaretCircleUpDownRegular } from '../regular/caret-circle-up-down-regular'
import { CaretCircleUpDownThin } from '../thin/caret-circle-up-down-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CaretCircleUpDownRegular,
  bold: CaretCircleUpDownBold,
  duotone: CaretCircleUpDownDuotone,
  fill: CaretCircleUpDownFill,
  light: CaretCircleUpDownLight,
  thin: CaretCircleUpDownThin,
} as const

export const CaretCircleUpDown = (props: IconProps) => {
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
