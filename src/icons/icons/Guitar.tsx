import { useContext } from 'react'

import { GuitarBold } from '../bold/guitar-bold'
import { GuitarDuotone } from '../duotone/guitar-duotone'
import { GuitarFill } from '../fill/guitar-fill'
import { GuitarLight } from '../light/guitar-light'
import { GuitarRegular } from '../regular/guitar-regular'
import { GuitarThin } from '../thin/guitar-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GuitarRegular,
  bold: GuitarBold,
  duotone: GuitarDuotone,
  fill: GuitarFill,
  light: GuitarLight,
  thin: GuitarThin,
} as const

export const Guitar = (props: IconProps) => {
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
