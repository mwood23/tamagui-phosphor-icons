import { useContext } from 'react'

import { ChampagneBold } from '../bold/champagne-bold'
import { ChampagneDuotone } from '../duotone/champagne-duotone'
import { ChampagneFill } from '../fill/champagne-fill'
import { ChampagneLight } from '../light/champagne-light'
import { ChampagneRegular } from '../regular/champagne-regular'
import { ChampagneThin } from '../thin/champagne-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChampagneRegular,
  bold: ChampagneBold,
  duotone: ChampagneDuotone,
  fill: ChampagneFill,
  light: ChampagneLight,
  thin: ChampagneThin,
} as const

export const Champagne = (props: IconProps) => {
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
