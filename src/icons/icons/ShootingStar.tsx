import { useContext } from 'react'

import { ShootingStarBold } from '../bold/shooting-star-bold'
import { ShootingStarDuotone } from '../duotone/shooting-star-duotone'
import { ShootingStarFill } from '../fill/shooting-star-fill'
import { ShootingStarLight } from '../light/shooting-star-light'
import { ShootingStarRegular } from '../regular/shooting-star-regular'
import { ShootingStarThin } from '../thin/shooting-star-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ShootingStarRegular,
  bold: ShootingStarBold,
  duotone: ShootingStarDuotone,
  fill: ShootingStarFill,
  light: ShootingStarLight,
  thin: ShootingStarThin,
} as const

export const ShootingStar = (props: IconProps) => {
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
