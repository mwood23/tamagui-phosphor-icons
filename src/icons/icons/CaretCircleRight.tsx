import { useContext } from 'react'

import { CaretCircleRightBold } from '../bold/caret-circle-right-bold'
import { CaretCircleRightDuotone } from '../duotone/caret-circle-right-duotone'
import { CaretCircleRightFill } from '../fill/caret-circle-right-fill'
import { CaretCircleRightLight } from '../light/caret-circle-right-light'
import { CaretCircleRightRegular } from '../regular/caret-circle-right-regular'
import { CaretCircleRightThin } from '../thin/caret-circle-right-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CaretCircleRightRegular,
  bold: CaretCircleRightBold,
  duotone: CaretCircleRightDuotone,
  fill: CaretCircleRightFill,
  light: CaretCircleRightLight,
  thin: CaretCircleRightThin,
} as const

export const CaretCircleRight = (props: IconProps) => {
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
