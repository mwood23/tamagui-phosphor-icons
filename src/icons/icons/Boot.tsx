import { useContext } from 'react'

import { BootBold } from '../bold/boot-bold'
import { BootDuotone } from '../duotone/boot-duotone'
import { BootFill } from '../fill/boot-fill'
import { BootLight } from '../light/boot-light'
import { BootRegular } from '../regular/boot-regular'
import { BootThin } from '../thin/boot-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BootRegular,
  bold: BootBold,
  duotone: BootDuotone,
  fill: BootFill,
  light: BootLight,
  thin: BootThin,
} as const

export const Boot = (props: IconProps) => {
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
