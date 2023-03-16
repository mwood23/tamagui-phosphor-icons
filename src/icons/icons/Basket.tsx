import { useContext } from 'react'

import { BasketBold } from '../bold/basket-bold'
import { BasketDuotone } from '../duotone/basket-duotone'
import { BasketFill } from '../fill/basket-fill'
import { BasketLight } from '../light/basket-light'
import { BasketRegular } from '../regular/basket-regular'
import { BasketThin } from '../thin/basket-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BasketRegular,
  bold: BasketBold,
  duotone: BasketDuotone,
  fill: BasketFill,
  light: BasketLight,
  thin: BasketThin,
} as const

export const Basket = (props: IconProps) => {
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
