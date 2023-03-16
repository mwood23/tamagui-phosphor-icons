import { useContext } from 'react'

import { GrainsSlashBold } from '../bold/grains-slash-bold'
import { GrainsSlashDuotone } from '../duotone/grains-slash-duotone'
import { GrainsSlashFill } from '../fill/grains-slash-fill'
import { GrainsSlashLight } from '../light/grains-slash-light'
import { GrainsSlashRegular } from '../regular/grains-slash-regular'
import { GrainsSlashThin } from '../thin/grains-slash-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GrainsSlashRegular,
  bold: GrainsSlashBold,
  duotone: GrainsSlashDuotone,
  fill: GrainsSlashFill,
  light: GrainsSlashLight,
  thin: GrainsSlashThin,
} as const

export const GrainsSlash = (props: IconProps) => {
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
