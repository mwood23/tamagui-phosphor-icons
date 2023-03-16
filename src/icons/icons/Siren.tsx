import { useContext } from 'react'

import { SirenBold } from '../bold/siren-bold'
import { SirenDuotone } from '../duotone/siren-duotone'
import { SirenFill } from '../fill/siren-fill'
import { SirenLight } from '../light/siren-light'
import { SirenRegular } from '../regular/siren-regular'
import { SirenThin } from '../thin/siren-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SirenRegular,
  bold: SirenBold,
  duotone: SirenDuotone,
  fill: SirenFill,
  light: SirenLight,
  thin: SirenThin,
} as const

export const Siren = (props: IconProps) => {
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
