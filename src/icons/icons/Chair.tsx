import { useContext } from 'react'

import { ChairBold } from '../bold/chair-bold'
import { ChairDuotone } from '../duotone/chair-duotone'
import { ChairFill } from '../fill/chair-fill'
import { ChairLight } from '../light/chair-light'
import { ChairRegular } from '../regular/chair-regular'
import { ChairThin } from '../thin/chair-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChairRegular,
  bold: ChairBold,
  duotone: ChairDuotone,
  fill: ChairFill,
  light: ChairLight,
  thin: ChairThin,
} as const

export const Chair = (props: IconProps) => {
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
