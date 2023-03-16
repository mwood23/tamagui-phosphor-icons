import { useContext } from 'react'

import { PencilSlashBold } from '../bold/pencil-slash-bold'
import { PencilSlashDuotone } from '../duotone/pencil-slash-duotone'
import { PencilSlashFill } from '../fill/pencil-slash-fill'
import { PencilSlashLight } from '../light/pencil-slash-light'
import { PencilSlashRegular } from '../regular/pencil-slash-regular'
import { PencilSlashThin } from '../thin/pencil-slash-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PencilSlashRegular,
  bold: PencilSlashBold,
  duotone: PencilSlashDuotone,
  fill: PencilSlashFill,
  light: PencilSlashLight,
  thin: PencilSlashThin,
} as const

export const PencilSlash = (props: IconProps) => {
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
