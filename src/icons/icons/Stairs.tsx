import { useContext } from 'react'

import { StairsBold } from '../bold/stairs-bold'
import { StairsDuotone } from '../duotone/stairs-duotone'
import { StairsFill } from '../fill/stairs-fill'
import { StairsLight } from '../light/stairs-light'
import { StairsRegular } from '../regular/stairs-regular'
import { StairsThin } from '../thin/stairs-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: StairsRegular,
  bold: StairsBold,
  duotone: StairsDuotone,
  fill: StairsFill,
  light: StairsLight,
  thin: StairsThin,
} as const

export const Stairs = (props: IconProps) => {
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
