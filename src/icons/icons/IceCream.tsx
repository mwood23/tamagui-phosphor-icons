import { useContext } from 'react'

import { IceCreamBold } from '../bold/ice-cream-bold'
import { IceCreamDuotone } from '../duotone/ice-cream-duotone'
import { IceCreamFill } from '../fill/ice-cream-fill'
import { IceCreamLight } from '../light/ice-cream-light'
import { IceCreamRegular } from '../regular/ice-cream-regular'
import { IceCreamThin } from '../thin/ice-cream-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: IceCreamRegular,
  bold: IceCreamBold,
  duotone: IceCreamDuotone,
  fill: IceCreamFill,
  light: IceCreamLight,
  thin: IceCreamThin,
} as const

export const IceCream = (props: IconProps) => {
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
