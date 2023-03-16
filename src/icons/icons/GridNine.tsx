import { useContext } from 'react'

import { GridNineBold } from '../bold/grid-nine-bold'
import { GridNineDuotone } from '../duotone/grid-nine-duotone'
import { GridNineFill } from '../fill/grid-nine-fill'
import { GridNineLight } from '../light/grid-nine-light'
import { GridNineRegular } from '../regular/grid-nine-regular'
import { GridNineThin } from '../thin/grid-nine-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GridNineRegular,
  bold: GridNineBold,
  duotone: GridNineDuotone,
  fill: GridNineFill,
  light: GridNineLight,
  thin: GridNineThin,
} as const

export const GridNine = (props: IconProps) => {
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
