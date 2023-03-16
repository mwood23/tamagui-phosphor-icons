import { useContext } from 'react'

import { PencilSimpleSlashBold } from '../bold/pencil-simple-slash-bold'
import { PencilSimpleSlashDuotone } from '../duotone/pencil-simple-slash-duotone'
import { PencilSimpleSlashFill } from '../fill/pencil-simple-slash-fill'
import { PencilSimpleSlashLight } from '../light/pencil-simple-slash-light'
import { PencilSimpleSlashRegular } from '../regular/pencil-simple-slash-regular'
import { PencilSimpleSlashThin } from '../thin/pencil-simple-slash-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PencilSimpleSlashRegular,
  bold: PencilSimpleSlashBold,
  duotone: PencilSimpleSlashDuotone,
  fill: PencilSimpleSlashFill,
  light: PencilSimpleSlashLight,
  thin: PencilSimpleSlashThin,
} as const

export const PencilSimpleSlash = (props: IconProps) => {
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
