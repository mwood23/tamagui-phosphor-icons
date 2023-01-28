import { useContext } from 'react'

import { SignpostBold } from '../bold/signpost-bold'
import { SignpostDuotone } from '../duotone/signpost-duotone'
import { SignpostFill } from '../fill/signpost-fill'
import { SignpostLight } from '../light/signpost-light'
import { SignpostRegular } from '../regular/signpost-regular'
import { SignpostThin } from '../thin/signpost-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SignpostRegular,
  bold: SignpostBold,
  duotone: SignpostDuotone,
  fill: SignpostFill,
  light: SignpostLight,
  thin: SignpostThin,
} as const

export const Signpost = (props: IconProps) => {
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
