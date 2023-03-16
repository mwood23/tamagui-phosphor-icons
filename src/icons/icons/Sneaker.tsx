import { useContext } from 'react'

import { SneakerBold } from '../bold/sneaker-bold'
import { SneakerDuotone } from '../duotone/sneaker-duotone'
import { SneakerFill } from '../fill/sneaker-fill'
import { SneakerLight } from '../light/sneaker-light'
import { SneakerRegular } from '../regular/sneaker-regular'
import { SneakerThin } from '../thin/sneaker-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SneakerRegular,
  bold: SneakerBold,
  duotone: SneakerDuotone,
  fill: SneakerFill,
  light: SneakerLight,
  thin: SneakerThin,
} as const

export const Sneaker = (props: IconProps) => {
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
