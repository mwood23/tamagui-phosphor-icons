import { useContext } from 'react'

import { TrademarkBold } from '../bold/trademark-bold'
import { TrademarkDuotone } from '../duotone/trademark-duotone'
import { TrademarkFill } from '../fill/trademark-fill'
import { TrademarkLight } from '../light/trademark-light'
import { TrademarkRegular } from '../regular/trademark-regular'
import { TrademarkThin } from '../thin/trademark-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TrademarkRegular,
  bold: TrademarkBold,
  duotone: TrademarkDuotone,
  fill: TrademarkFill,
  light: TrademarkLight,
  thin: TrademarkThin,
} as const

export const Trademark = (props: IconProps) => {
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
