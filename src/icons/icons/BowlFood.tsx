import { useContext } from 'react'

import { BowlFoodBold } from '../bold/bowl-food-bold'
import { BowlFoodDuotone } from '../duotone/bowl-food-duotone'
import { BowlFoodFill } from '../fill/bowl-food-fill'
import { BowlFoodLight } from '../light/bowl-food-light'
import { BowlFoodRegular } from '../regular/bowl-food-regular'
import { BowlFoodThin } from '../thin/bowl-food-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BowlFoodRegular,
  bold: BowlFoodBold,
  duotone: BowlFoodDuotone,
  fill: BowlFoodFill,
  light: BowlFoodLight,
  thin: BowlFoodThin,
} as const

export const BowlFood = (props: IconProps) => {
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
