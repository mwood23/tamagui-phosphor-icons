import { useContext } from 'react'

import { BroomBold } from '../bold/broom-bold'
import { BroomDuotone } from '../duotone/broom-duotone'
import { BroomFill } from '../fill/broom-fill'
import { BroomLight } from '../light/broom-light'
import { BroomRegular } from '../regular/broom-regular'
import { BroomThin } from '../thin/broom-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BroomRegular,
  bold: BroomBold,
  duotone: BroomDuotone,
  fill: BroomFill,
  light: BroomLight,
  thin: BroomThin,
} as const

export const Broom = (props: IconProps) => {
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
