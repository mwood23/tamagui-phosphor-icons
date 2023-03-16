import { useContext } from 'react'

import { CastleTurretBold } from '../bold/castle-turret-bold'
import { CastleTurretDuotone } from '../duotone/castle-turret-duotone'
import { CastleTurretFill } from '../fill/castle-turret-fill'
import { CastleTurretLight } from '../light/castle-turret-light'
import { CastleTurretRegular } from '../regular/castle-turret-regular'
import { CastleTurretThin } from '../thin/castle-turret-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CastleTurretRegular,
  bold: CastleTurretBold,
  duotone: CastleTurretDuotone,
  fill: CastleTurretFill,
  light: CastleTurretLight,
  thin: CastleTurretThin,
} as const

export const CastleTurret = (props: IconProps) => {
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
