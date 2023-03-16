import { useContext } from 'react'

import { ExcludeSquareBold } from '../bold/exclude-square-bold'
import { ExcludeSquareDuotone } from '../duotone/exclude-square-duotone'
import { ExcludeSquareFill } from '../fill/exclude-square-fill'
import { ExcludeSquareLight } from '../light/exclude-square-light'
import { ExcludeSquareRegular } from '../regular/exclude-square-regular'
import { ExcludeSquareThin } from '../thin/exclude-square-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ExcludeSquareRegular,
  bold: ExcludeSquareBold,
  duotone: ExcludeSquareDuotone,
  fill: ExcludeSquareFill,
  light: ExcludeSquareLight,
  thin: ExcludeSquareThin,
} as const

export const ExcludeSquare = (props: IconProps) => {
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
