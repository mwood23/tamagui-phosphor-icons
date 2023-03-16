import { useContext } from 'react'

import { CaretUpDownBold } from '../bold/caret-up-down-bold'
import { CaretUpDownDuotone } from '../duotone/caret-up-down-duotone'
import { CaretUpDownFill } from '../fill/caret-up-down-fill'
import { CaretUpDownLight } from '../light/caret-up-down-light'
import { CaretUpDownRegular } from '../regular/caret-up-down-regular'
import { CaretUpDownThin } from '../thin/caret-up-down-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CaretUpDownRegular,
  bold: CaretUpDownBold,
  duotone: CaretUpDownDuotone,
  fill: CaretUpDownFill,
  light: CaretUpDownLight,
  thin: CaretUpDownThin,
} as const

export const CaretUpDown = (props: IconProps) => {
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
