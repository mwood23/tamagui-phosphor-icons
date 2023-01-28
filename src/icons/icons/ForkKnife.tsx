import { useContext } from 'react'

import { ForkKnifeBold } from '../bold/fork-knife-bold'
import { ForkKnifeDuotone } from '../duotone/fork-knife-duotone'
import { ForkKnifeFill } from '../fill/fork-knife-fill'
import { ForkKnifeLight } from '../light/fork-knife-light'
import { ForkKnifeRegular } from '../regular/fork-knife-regular'
import { ForkKnifeThin } from '../thin/fork-knife-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ForkKnifeRegular,
  bold: ForkKnifeBold,
  duotone: ForkKnifeDuotone,
  fill: ForkKnifeFill,
  light: ForkKnifeLight,
  thin: ForkKnifeThin,
} as const

export const ForkKnife = (props: IconProps) => {
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
