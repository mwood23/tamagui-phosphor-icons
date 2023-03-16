import { useContext } from 'react'

import { HandCoinsBold } from '../bold/hand-coins-bold'
import { HandCoinsDuotone } from '../duotone/hand-coins-duotone'
import { HandCoinsFill } from '../fill/hand-coins-fill'
import { HandCoinsLight } from '../light/hand-coins-light'
import { HandCoinsRegular } from '../regular/hand-coins-regular'
import { HandCoinsThin } from '../thin/hand-coins-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: HandCoinsRegular,
  bold: HandCoinsBold,
  duotone: HandCoinsDuotone,
  fill: HandCoinsFill,
  light: HandCoinsLight,
  thin: HandCoinsThin,
} as const

export const HandCoins = (props: IconProps) => {
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
